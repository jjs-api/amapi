let helper162 = require('./helper.ts');
const query162 = require('supertest')(helper162.baseUrl.url);
const expect162 = require('chai').expect;

describe("16.2 Test /graphql DeleteUser request userId2", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query162.post('/auth/sign-in')
      .send({ 
      clientId: helper162.clientId.id,
      username: helper162.username.un,
      password: helper162.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId2@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query162.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId2@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect162(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});