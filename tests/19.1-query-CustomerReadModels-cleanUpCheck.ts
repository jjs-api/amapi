let helper191 = require('./helper.ts');
const query191 = require('supertest')(helper191.baseUrl.url);
const expect191 = require('chai').expect;

describe("19.1 Test /graphql CustomerReadModels response onCreate", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query191.post('/auth/sign-in')
      .send({ 
      clientId: helper191.clientId.id,
      username: helper191.username.un,
      password: helper191.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query191.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect191(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModels')
      .to.deep.equal([])
      done();
    });
  });
});