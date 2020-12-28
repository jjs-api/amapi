let helper83 = require('./helper.ts');
const query83 = require('supertest')(helper83.baseUrl.url);
const expect83 = require('chai').expect;

describe("8.3 Test /graphql SaveCustomer update request id3", () => {
  it("GIVEN I send mutation 'SaveCustomer', "+ 
  "WHEN posting input {id, name, surname, photoUrl} as per schema, "+
  "THEN response with expected 'true' value is displayed",
    done => { 
      query83.post('/graphql')
      .set("Authorization", "Bearer " + helper83.token.at) 
      .send({query: 'mutation {SaveCustomer(input: {id: 3,name: "-name3",surname: "-surname3",photo: "https://test.ie/photo3.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect83(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});