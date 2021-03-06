let helper81 = require('./helper.ts');
const query81 = require('supertest')(helper81.baseUrl.url);
const expect81 = require('chai').expect;

describe("8.1 Test /graphql SaveCustomer update request id1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query81.post('/auth/sign-in')
      .send({ 
      clientId: helper81.clientId.id,
      username: helper81.username.un,
      password: helper81.password.pw 
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
      query81.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveCustomer(input: {id: 1,name: "-name1",surname: "-surname1",photo: "https://test.ie/photo1.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect81(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});