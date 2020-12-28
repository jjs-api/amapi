let helper164 = require('./helper.ts');
const query164 = require('supertest')(helper164.baseUrl.url);
const expect164 = require('chai').expect;

describe("16.4 Test /graphql DeleteUser request userId3", () => {
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId3@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'null' value is displayed",
    done => { 
      query164.post('/graphql')
      .set("Authorization", "Bearer " + helper164.token.at) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId3@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect164(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .and.to.equal(null)
      done();
    });
  });
});