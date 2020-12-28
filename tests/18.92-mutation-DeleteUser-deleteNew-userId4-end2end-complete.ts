let helper1892 = require('./helper.ts');
const query1892 = require('supertest')(helper1892.baseUrl.url);
const expect1892 = require('chai').expect;

describe("18.92 Test /graphql DeleteUser request #1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query1892.post('/auth/sign-in')
      .send({ 
      clientId: helper1892.clientId.id,
      username: helper1892.username.un,
      password: helper1892.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId4@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query1892.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId4@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect1892(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});