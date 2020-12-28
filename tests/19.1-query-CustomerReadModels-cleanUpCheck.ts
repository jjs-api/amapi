let helper191 = require('./helper.ts');
const query191 = require('supertest')(helper191.baseUrl.url);
const expect191 = require('chai').expect;

describe("19.1 Test /graphql CustomerReadModels response onCreate", () => {
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query191.post('/graphql')
      .set("Authorization", "Bearer " + helper191.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect191(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModels')
      .to.deep.equal([])
      done();
    });
  });
});