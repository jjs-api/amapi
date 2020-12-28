let helper123 = require('./helper.ts');
const query123 = require('supertest')(helper123.baseUrl.url);
const expect123 = require('chai').expect;

describe("12.3 Test /graphql CustomerReadModel response onDelete id3", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3) after delete, "+
    "THEN response with expected 'null' value is displayed",
    done => { 
      query123.post('/graphql')
      .set("Authorization", "Bearer " + helper123.token.at) 
      .send({query: '{CustomerReadModel (id:3) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect123(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .to.equal(null)
      done();
    });
  });
});