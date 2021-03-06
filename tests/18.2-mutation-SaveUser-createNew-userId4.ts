let helper182 = require('./helper.ts');
const query182 = require('supertest')(helper182.baseUrl.url);
const expect182 = require('chai').expect;

describe("18.2 Test /graphql SaveUser create request userId4", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query182.post('/auth/sign-in')
      .send({ 
      clientId: helper182.clientId.id,
      username: helper182.username.un,
      password: helper182.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'SaveUser', "+ 
    "WHEN posting input {username, password, role} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query182.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveUser(input: {username:"userId4@theagilemonkeys.com",password:"Admin.2020",role:"Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect182(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveUser')
      .to.equal(true)
      done();
    });
  });
});