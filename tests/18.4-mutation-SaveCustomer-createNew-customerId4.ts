let helper184 = require('./helper.ts');
const query184 = require('supertest')(helper184.baseUrl.url);
const expect184 = require('chai').expect;

describe("18.4 Test /graphql SaveCustomer create request id4", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query184.post('/auth/sign-in')
      .send({ 
      clientId: helper184.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper184.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'true' value is displayed",
    done => { 
    query184.post('/graphql')
    .set("Authorization", "Bearer " + idToken) 
    .send({query: 'mutation {SaveCustomer(input: {id: 4,name: "name4",surname: "surname4"})}'})
    .end(function(err, res) {
    if (err) return done(err);

    expect184(res.body)
    .to.have.property('data')
    .and.to.have.property('SaveCustomer')
    .to.equal(true)
    done();
    });
  });
});