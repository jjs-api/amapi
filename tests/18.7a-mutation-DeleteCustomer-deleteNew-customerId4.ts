let helper187a = require('./helper.ts');
const query187a = require('supertest')(helper187a.baseUrl.url);
const expect187a = require('chai').expect;

describe("18.7a Test /graphql DeleteCustomer request id4", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query187a.post('/auth/sign-in')
      .send({ 
      clientId: helper187a.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper187a.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'DeleteCustomer', "+ 
    "WHEN posting {id: 4} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query187a.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
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