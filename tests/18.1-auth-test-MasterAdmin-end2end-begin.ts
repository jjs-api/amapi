let helper181 = require('./helper.ts');
const query181 = require('supertest')(helper181.baseUrl.url);
const expect181 = require('chai').expect;

describe("18.1 POST /auth/sign-in", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send login request ", done => { 
    query181.post('/auth/sign-in')
      .send({ 
      clientId: helper181.clientId.id,
      username: helper181.username.un,
      password: helper181.password.pw 
    })
      .end(function(err, res) {
      if (err) return done(err);
      done();     
    })
  });
});