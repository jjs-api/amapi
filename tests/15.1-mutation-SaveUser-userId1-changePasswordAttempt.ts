let helper151 = require('./helper.ts');
const query151 = require('supertest')(helper151.baseUrl.url);
const expect151 = require('chai').expect;

describe("15.1 Test /graphql SaveUser Change Password Attempt", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send mutation 'SaveUser', "+ 
    "WHEN posting input {username, password, role} as per schema, "+
    "With updated password, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query151.post('/graphql')
      .set("Authorization", "Bearer " + helper151.token.at) 
      .send({query: 'mutation {SaveUser(input: {username:"userId1@theagilemonkeys.com",password:"Admin.2021",role:"Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect151(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveUser')
      .and.to.equal(true)
      done();
    });
  });
});