let helper22 = require('./helper.ts');
const query22 = require('supertest')(helper22.baseUrl.url);
const expect22 = require('chai').expect;

describe("2.2 Test /graphql SaveUser create request userId2", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query22.post('/auth/sign-in')
      .send({ 
      clientId: helper22.clientId.id,
      username: helper22.username.un,
      password: helper22.password.pw 
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
      query22.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveUser(input: {username:"userId2@theagilemonkeys.com", password: "Admin.2020",role: "Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect22(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveUser')
      .and.to.equal(true)
      done();
    });
  });
});