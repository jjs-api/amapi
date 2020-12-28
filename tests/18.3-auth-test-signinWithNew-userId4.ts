let helper183 = require('./helper.ts');
const request183 = require('supertest')(helper183.baseUrl.url);
const expect183 = require('chai').expect;
const fsAuth183 = require('fs');

describe("18.3 POST /auth/sign-in", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send login request", done => { 
    request183.post('/auth/sign-in')
      .send({ 
      clientId: helper183.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper183.password.pw 
    })
      .end(function(err, res) {
      if (err) return done(err);
      done();     
    })
  });
});