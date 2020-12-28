let helper123 = require('./helper.ts');
const query123 = require('supertest')(helper123.baseUrl.url);
const expect123 = require('chai').expect;

describe("12.3 Test /graphql CustomerReadModel response onDelete id3", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query123.post('/auth/sign-in')
      .send({ 
      clientId: helper123.clientId.id,
      username: helper123.username.un,
      password: helper123.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3) after delete, "+
    "THEN response with expected 'null' value is displayed",
    done => { 
      query123.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:3) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect123(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .to.equal(null)
      done();
    });
  });
});