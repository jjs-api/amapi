let helper = require('./helper.ts');
const request = require('supertest')(helper.baseUrl.url);
const expect = require('chai').expect;
const fsAuth = require('fs');

describe("1.1 POST /auth/sign-in", () => {
  it("GIVEN I send login request, "+
  "WHEN posting input {clientId, username, password}, "+
  "THEN response with expected properties are displayed, "+
  "expected properties are 'accessToken', 'idToken', 'refreshToken', 'expiresIn' + 'tokenType'",
   done => { 
    request.post('/auth/sign-in')
      .send({ 
      clientId: helper.clientId.id,
      username: helper.username.un,
      password: helper.password.pw 
    })
    .expect(200)
    .expect((res) => {
      console.log(res.body)
      var idToken = res.body.idToken 
      // write token to file here
      fsAuth.writeFile('token.txt', idToken, (err) => console.error(err))
      return idToken
    })
      .end(function(err, res) {
      if (err) return done(err)

      expect(res.body)
      .to.have.property('accessToken')
      expect(res.body)
      .to.have.property('idToken')
      expect(res.body)
      .to.have.property('refreshToken')
      expect(res.body)
      .to.have.property('expiresIn')
      expect(res.body)
      .to.have.property('tokenType')
      done();     
    })
  });
});