let helper163 = require('./helper.ts');
const query163 = require('supertest')(helper163.baseUrl.url);
const expect163 = require('chai').expect;

describe("16.3 Test /graphql DeleteUser request userId3", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query163.post('/auth/sign-in')
      .send({ 
      clientId: helper163.clientId.id,
      username: helper163.username.un,
      password: helper163.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId3@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query163.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId3@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect163(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});