let helper1891 = require('./helper.ts');
const request1891 = require('supertest')(helper1891.baseUrl.url);
const expect1891 = require('chai').expect;
const fsAuth1891 = require('fs');

describe("18.91 POST /auth/sign-in", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send login request", done => { 
    request1891.post('/auth/sign-in')
      .send({ 
      clientId: helper1891.clientId.id,
      username: helper1891.username.un,
      password: helper1891.password.pw 
    })
      .end(function(err, res) {
      if (err) return done(err);
      done();     
    })
  });
});