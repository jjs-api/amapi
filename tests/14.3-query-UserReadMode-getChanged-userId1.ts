let helper143 = require('./helper.ts');
const query143 = require('supertest')(helper143.baseUrl.url);
const expect143 = require('chai').expect;

describe("14.3 Test /graphql UserReadModel after role change Admin to User", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query143.post('/auth/sign-in')
      .send({ 
      clientId: helper143.clientId.id,
      username: helper143.username.un,
      password: helper143.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query143.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect143(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId1@theagilemonkeys.com')
      done();
    });
  });      

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com},"+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query143.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect143(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('User')
      done();
    });
  });
});