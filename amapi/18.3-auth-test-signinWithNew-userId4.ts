let helper183 = require('./helper.ts');
const request183 = require('supertest')(helper183.baseUrl.url);
const expect183 = require('chai').expect;
const fsAuth183 = require('fs');

describe("18.3 POST /auth/sign-in", () => {
  it("GIVEN I send login request", done => { 
    request183.post('/auth/sign-in')
      .send({ 
      clientId: helper183.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper183.password.pw 
    })
    .expect(200)
    .expect((res) => {
      var idToken2 = res.body.idToken
      // write token to file here
      fsAuth183.writeFile('token2.txt', idToken2, (err) => console.error(err))
      return idToken2
    })
      .end(function(err, res) {
      if (err) return done(err);
      done();     
    })
  });
});