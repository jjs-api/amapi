let helper181 = require('./helper.ts');
const request181 = require('supertest')(helper181.baseUrl.url);
const expect181 = require('chai').expect;
const fsAuth181 = require('fs');

describe("18.1 POST /auth/sign-in", () => {
  it("GIVEN I send login request ", done => { 
    request181.post('/auth/sign-in')
      .send({ 
      clientId: helper181.clientId.id,
      username: helper181.username.un,
      password: helper181.password.pw 
    })
    .expect(200)
    .expect((res) => {
      var idToken = res.body.idToken 
      // write token to file here
      fsAuth181.writeFile('token.txt', idToken, (err) => console.error(err))
      return idToken
    })
      .end(function(err, res) {
      if (err) return done(err);
      done();     
    })
  });
});