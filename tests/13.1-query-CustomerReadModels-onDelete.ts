let helper131 = require('./helper.ts');
const query131 = require('supertest')(helper131.baseUrl.url);
const expect131 = require('chai').expect;

describe("13.1 Test /graphql CustomerReadModels response onDelete", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query131.post('/auth/sign-in')
      .send({ 
      clientId: helper131.clientId.id,
      username: helper131.username.un,
      password: helper131.password.pw 
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
      query131.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}} '})
      .end(function(err, res) {
      if (err) return done(err);

      expect131(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModels')
      .and.to.deep.equal([])
      done();
    });
  });
});