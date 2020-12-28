let helper188 = require('./helper.ts');
const query188 = require('supertest')(helper188.baseUrl.url);
const expect188 = require('chai').expect;

describe("18.8 Test /graphql CustomerReadModel create response #1", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4) after delete, "+
    "THEN response with expected 'null' value is displayed",
      done => { 
      query188.post('/graphql')
      .set("Authorization", "Bearer " + helper188.token2.at2) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect188(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .to.equal(null)
      done();
    });
  });
});