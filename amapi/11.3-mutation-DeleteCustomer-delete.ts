let helper113 = require('./helper.ts');
const query113 = require('supertest')(helper113.baseUrl.url);
const expect113 = require('chai').expect;

describe("11.3 Test /graphql DeleteCustomer request id3", () => {
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 3} as per schema"+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query113.post('/graphql')
      .set("Authorization", "Bearer " + helper113.token.at) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 3})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect113(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteCustomer')
      .and.to.equal(true)
      done();
    });
  });
});