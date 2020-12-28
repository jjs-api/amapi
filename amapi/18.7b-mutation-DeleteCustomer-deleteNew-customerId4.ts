let helper187b = require('./helper.ts');
const query187b = require('supertest')(helper187b.baseUrl.url);
const expect187b = require('chai').expect;

describe("18.7b Test /graphql DeleteCustomer request id4", () => {
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 4} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query187b.post('/graphql')
      .set("Authorization", "Bearer " + helper187b.token2.at2) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 4})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect187b(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteCustomer')
      .and.to.equal(true)
      done();
    });
  });
});