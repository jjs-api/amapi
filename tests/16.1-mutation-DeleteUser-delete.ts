let helper161 = require('./helper.ts');
const query161 = require('supertest')(helper161.baseUrl.url);
const expect161 = require('chai').expect;

describe("16.1 Test /graphql DeleteUser request userId1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query161.post('/auth/sign-in')
      .send({ 
      clientId: helper161.clientId.id,
      username: helper161.username.un,
      password: helper161.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId1@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query161.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId1@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect161(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});