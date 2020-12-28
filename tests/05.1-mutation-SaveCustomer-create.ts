let helper51 = require('./helper.ts');
const query51 = require('supertest')(helper51.baseUrl.url);
const expect51 = require('chai').expect;

describe("5.1 Test /graphql SaveCustomer create request id1", () => {
  it("GIVEN I send mutation 'SaveCustomer', "+ 
    "WHEN posting input {id, name, surname, photoUrl} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query51.post('/graphql')
      .set("Authorization", "Bearer " + helper51.token.at) 
      .send({query: 'mutation {SaveCustomer(input: {id: 1,name: "name1",surname: "surname1",photo: "https://test.ie/photo1.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect51(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});