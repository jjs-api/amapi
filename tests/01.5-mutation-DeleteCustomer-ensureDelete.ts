let helper15 = require('./helper.ts');
const query15 = require('supertest')(helper15.baseUrl.url);
const expect15 = require('chai').expect;

describe("1.5 /graphql ensure DeleteCustomer id4 before test run", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query15.post('/auth/sign-in')
      .send({ 
      clientId: helper15.clientId.id,
      username: helper15.username.un,
      password: helper15.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("Ensure Customer 'id4' does not exist before test run",
    done => { 
      query15.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 4})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});