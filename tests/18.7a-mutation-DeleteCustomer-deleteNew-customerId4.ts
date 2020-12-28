let helper187a = require('./helper.ts');
const query187a = require('supertest')(helper187a.baseUrl.url);
const expect187a = require('chai').expect;

describe("18.7a Test /graphql DeleteCustomer request id4", () => {
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 4} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query187a.post('/graphql')
      .set("Authorization", "Bearer " + helper187a.token2.at2) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 4})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect187a(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteCustomer')
      .and.to.equal(true)
      done();
    });
  });
});