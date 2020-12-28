let helper21 = require('./helper.ts');
const query21 = require('supertest')(helper21.baseUrl.url);
const expect21 = require('chai').expect;


describe("2.1 Test /graphql SaveUser create request userId1", () => {
  it("GIVEN I send mutation 'SaveUser', "+ 
    "WHEN posting input {username, password, role} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query21.post('/graphql')
      .set("Authorization", "Bearer " + helper21.token.at) 
      .send({query: 'mutation {SaveUser(input: {username:"userId1@theagilemonkeys.com",password:"Admin.2020",role:"Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect21(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveUser')
      .and.to.equal(true)
      done();
    });
  });
});