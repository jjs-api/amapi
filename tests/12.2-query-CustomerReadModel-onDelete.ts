let helper122 = require('./helper.ts');
const query122 = require('supertest')(helper122.baseUrl.url);
const expect122 = require('chai').expect;

describe("12.2 Test /graphql CustomerReadModel response onDelete id2", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2) after delete, "+
    "THEN response with expected 'null' value is displayed",
    done => { 
      query122.post('/graphql')
      .set("Authorization", "Bearer " + helper122.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect122(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .to.equal(null)
      done();
    });
  });
});