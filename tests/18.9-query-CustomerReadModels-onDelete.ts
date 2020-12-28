let helper189 = require('./helper.ts');
const query189 = require('supertest')(helper189.baseUrl.url);
const expect189 = require('chai').expect;

describe("18.9 Test /graphql CustomerReadModels response onCreate", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query189.post('/auth/sign-in')
      .send({ 
      clientId: helper189.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper189.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting {name,surname,photoUrl,userId} after delete, "+
    "THEN response with expected '[]' value is displayed",
    done => { 
      query189.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect189(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModels')
      .to.deep.equal([])
      done();
    });
  });
});