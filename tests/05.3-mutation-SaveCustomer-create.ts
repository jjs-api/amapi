let helper53 = require('./helper.ts');
const query53 = require('supertest')(helper53.baseUrl.url);
const expect53 = require('chai').expect;

describe("5.3 Test /graphql SaveCustomer create request id3", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query53.post('/auth/sign-in')
      .send({ 
      clientId: helper53.clientId.id,
      username: helper53.username.un,
      password: helper53.password.pw 
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
      query53.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {SaveCustomer(input: {id: 3,name: "name3",surname: "surname3",photo: "https://test.ie/photo3.0.jpg" })}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect53(res.body)
      .to.have.property('data')
      .and.to.have.property('SaveCustomer')
      .and.to.equal(true)
      done();
    });
  });
});