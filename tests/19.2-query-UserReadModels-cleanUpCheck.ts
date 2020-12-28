let helper192 = require('./helper.ts');
const query192 = require('supertest')(helper192.baseUrl.url);
const expect192 = require('chai').expect;

describe("19.2 Test /graphql UserReadModels response onDelete", () => {
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting {id,role} after delete, "+
    "THEN response with expected 'admin@theagilemonkeys.com' value is displayed",
    done => { 
      query192.post('/graphql')
      .set("Authorization", "Bearer " + helper192.token.at) 
      .send({query: '{UserReadModels {id,role}} '})
      .end(function(err, res) {
      if (err) return done(err);

      expect192(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModels')
      .and.to.have.property('0')
      .and.to.have.deep.property('id')
      .to.equal('admin@theagilemonkeys.com')
      done();
    });
  });
});