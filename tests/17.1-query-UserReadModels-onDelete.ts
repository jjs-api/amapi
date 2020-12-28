let helper171 = require('./helper.ts');
const query171 = require('supertest')(helper171.baseUrl.url);
const expect171 = require('chai').expect;

describe("17.1 Test /graphql UserReadModels response onDelete", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting {id,role} after delete, "+
    "THEN response with expected 'admin@theagilemonkeys.com' value is displayed",
    done => { 
      query171.post('/graphql')
      .set("Authorization", "Bearer " + helper171.token.at) 
      .send({query: '{UserReadModels {id,role}} '})
      .end(function(err, res) {
      if (err) return done(err);

      expect171(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModels')
      .and.to.have.property('0')
      .and.to.have.deep.property('id')
      .to.equal('admin@theagilemonkeys.com')
      done();
    });
  });
});