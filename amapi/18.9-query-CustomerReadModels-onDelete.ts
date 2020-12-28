let helper189 = require('./helper.ts');
const query189 = require('supertest')(helper189.baseUrl.url);
const expect189 = require('chai').expect;

describe("18.9 Test /graphql CustomerReadModels response onCreate", () => {
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting {name,surname,photoUrl,userId} after delete, "+
    "THEN response with expected '[]' value is displayed",
    done => { 
      query189.post('/graphql')
      .set("Authorization", "Bearer " + helper189.token2.at2) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect189(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModels')
      .to.deep.equal([])
      done();
    });
  });
});