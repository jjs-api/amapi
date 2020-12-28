let helper144 = require('./helper.ts');
const query144 = require('supertest')(helper144.baseUrl.url);
const expect144 = require('chai').expect;

describe("14.4 Test /graphql SaveUser create request #1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query144.post('/auth/sign-in')
      .send({ 
      clientId: helper144.clientId.id,
      username: helper144.username.un,
      password: helper144.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'ChangeUser', "+ 
    "WHEN posting input {username:'userId1@theagilemonkeys.com',password:'Admin.2020',role:'Admin'} as per schema, "+
    "Changing role from User back to Admin, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query144.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {ChangeUserRole(input: {username:"userId1@theagilemonkeys.com",password:"Admin.2020",role:"Admin"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect144(res.body)
      .to.have.property('data')
      .and.to.have.property('ChangeUserRole')
      .and.to.equal(true)
      done();
    });
  });
});