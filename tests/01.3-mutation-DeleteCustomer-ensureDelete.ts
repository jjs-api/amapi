let helper13 = require('./helper.ts');
const query13 = require('supertest')(helper13.baseUrl.url);
const expect13 = require('chai').expect;

describe("1.3 /graphql ensure DeleteCustomer id2 before test run", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query13.post('/auth/sign-in')
      .send({ 
      clientId: helper13.clientId.id,
      username: helper13.username.un,
      password: helper13.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("Ensure Customer 'id2' does not exist before test run",
    done => { 
      query13.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 2})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});