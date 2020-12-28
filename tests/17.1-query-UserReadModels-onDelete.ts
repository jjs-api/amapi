let helper171 = require('./helper.ts');
const query171 = require('supertest')(helper171.baseUrl.url);
const expect171 = require('chai').expect;

describe("17.1 Test /graphql UserReadModels response onDelete", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query171.post('/auth/sign-in')
      .send({ 
      clientId: helper171.clientId.id,
      username: helper171.username.un,
      password: helper171.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting {id,role} after delete, "+
    "THEN response with expected 'admin@theagilemonkeys.com' value is displayed",
    done => { 
      query171.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModels {id,role}} '})
      .end(function(err, res) {
      if (err) return done(err);

      expect171(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModels')
      .and.to.have.property('0')
      .and.to.have.deep.property('id')
      .to.equal('admin@theagilemonkeys.com')
      done();
    });
  });
});