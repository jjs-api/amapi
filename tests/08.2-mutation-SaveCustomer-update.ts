let helper82 = require('./helper.ts');
const query82 = require('supertest')(helper82.baseUrl.url);
const expect82 = require('chai').expect;

describe("8.2 Test /graphql SaveCustomer update request id2", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query82.post('/auth/sign-in')
      .send({ 
      clientId: helper82.clientId.id,
      username: helper82.username.un,
      password: helper82.password.pw 
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
      query82.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveCustomer(input: {id: 2,name: "-name2",surname: "-surname2",photo: "https://test.ie/photo2.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect82(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});