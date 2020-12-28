let helper111 = require('./helper.ts');
const query111 = require('supertest')(helper111.baseUrl.url);
const expect111 = require('chai').expect;

describe("11.1 Test /graphql DeleteCustomer request id1", () => {
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 1} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query111.post('/graphql')
      .set("Authorization", "Bearer " + helper111.token.at) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 1})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect111(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteCustomer')
      .and.to.equal(true)
      done();
    });
  });
});