let helper1892 = require('./helper.ts');
const query1892 = require('supertest')(helper1892.baseUrl.url);
const expect1892 = require('chai').expect;

describe("18.92 Test /graphql DeleteUser request #1", () => {
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId4@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query1892.post('/graphql')
      .set("Authorization", "Bearer " + helper1892.token.at) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId4@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect1892(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});