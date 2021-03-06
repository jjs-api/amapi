let helper52 = require('./helper.ts');
const query52 = require('supertest')(helper52.baseUrl.url);
const expect52 = require('chai').expect;

describe("5.2 Test /graphql SaveCustomer create request id2", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query52.post('/auth/sign-in')
      .send({ 
      clientId: helper52.clientId.id,
      username: helper52.username.un,
      password: helper52.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send mutation 'SaveCustomer', "+ 
    "WHEN posting input {id, name, surname, photoUrl} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query52.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveCustomer(input: {id: 2,name: "name2",surname: "surname2",photo: "https://test.ie/photo2.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect52(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});