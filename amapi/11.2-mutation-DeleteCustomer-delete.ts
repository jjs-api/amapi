let helper112 = require('./helper.ts');
const query112 = require('supertest')(helper112.baseUrl.url);
const expect112 = require('chai').expect;

describe("11.2 Test /graphql DeleteCustomer request id2", () => {
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 2} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query112.post('/graphql')
      .set("Authorization", "Bearer " + helper112.token.at) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 2})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect112(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteCustomer')
      .and.to.equal(true)
      done();
    });
  });
});