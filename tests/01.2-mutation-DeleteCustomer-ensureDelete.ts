let helper12 = require('./helper.ts');
const query12 = require('supertest')(helper12.baseUrl.url);
const expect12 = require('chai').expect;

describe("1.2 /graphql ensure DeleteCustomer id1 before test run", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 1500))
  beforeEach(function(done) {
    query12.post('/auth/sign-in')
      .send({ 
      clientId: helper12.clientId.id,
      username: helper12.username.un,
      password: helper12.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("Ensure Customer 'id1' does not exist before test run",
    done => { 
      query12.post('/graphql')
      //.set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 1})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});