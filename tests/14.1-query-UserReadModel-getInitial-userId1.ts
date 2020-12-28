let helper141 = require('./helper.ts');
const query141 = require('supertest')(helper141.baseUrl.url);
const expect141 = require('chai').expect;

describe("14.1 Test /graphql UserReadModel create response userId1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query141.post('/auth/sign-in')
      .send({ 
      clientId: helper141.clientId.id,
      username: helper141.username.un,
      password: helper141.password.pw 
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
      query141.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect141(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId1@theagilemonkeys.com')
      done();
    });
  });      

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query141.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect141(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done();
    });
  });
});