let helper121 = require('./helper.ts');
const query121 = require('supertest')(helper121.baseUrl.url);
const expect121 = require('chai').expect;

describe("12.1 Test /graphql CustomerReadModel response onDelete id1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query121.post('/auth/sign-in')
      .send({ 
      clientId: helper121.clientId.id,
      username: helper121.username.un,
      password: helper121.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1) after delete, "+
    "THEN response with expected 'null' value is displayed",
    done => { 
      query121.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect121(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .to.equal(null)
      done();
    });
  });
});