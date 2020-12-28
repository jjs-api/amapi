let helper14 = require('./helper.ts');
const query14 = require('supertest')(helper14.baseUrl.url);
const expect14 = require('chai').expect;

describe("1.4 /graphql ensure DeleteCustomer id3 before test run", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query14.post('/auth/sign-in')
      .send({ 
      clientId: helper14.clientId.id,
      username: helper14.username.un,
      password: helper14.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("Ensure Customer 'id3' does not exist before test run",
    done => { 
      query14.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 3})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});