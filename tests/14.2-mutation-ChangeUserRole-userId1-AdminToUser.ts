let helper142 = require('./helper.ts');
const query142 = require('supertest')(helper142.baseUrl.url);
const expect142 = require('chai').expect;

describe("14.2 Test /graphql ChangeUser from Admin to User", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query142.post('/auth/sign-in')
      .send({ 
      clientId: helper142.clientId.id,
      username: helper142.username.un,
      password: helper142.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send mutation 'ChangeUser', "+ 
    "WHEN posting input {username:'userId1@theagilemonkeys.com',password:'Admin.2020',role:'User'} as per schema, "+
    "Changing role from Admin to User,"+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query142.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: 'mutation {ChangeUserRole(input: {username:"userId1@theagilemonkeys.com",password:"Admin.2020",role:"User"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect142(res.body)
      .to.have.property('data')
      .and.to.have.property('ChangeUserRole')
      .and.to.equal(true)
      done();
    });
  });
});