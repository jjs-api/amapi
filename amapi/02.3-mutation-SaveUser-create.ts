let helper23 = require('./helper.ts');
const query23 = require('supertest')(helper23.baseUrl.url);
const expect23 = require('chai').expect;

describe("2.3 Test /graphql SaveUser create request userId3", () => {
  it("GIVEN I send mutation 'SaveUser', "+ 
    "WHEN posting input {username, password, role} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query23.post('/graphql')
      .set("Authorization", "Bearer " + helper23.token.at) 
      .send({query: 'mutation {SaveUser(input: {username: "userId3@theagilemonkeys.com", password: "Admin.2020",role: "Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect23(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveUser')
      .and.to.equal(true)
      done();
    });
  });
});