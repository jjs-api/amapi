let helper145 = require('./helper.ts');
const query145 = require('supertest')(helper145.baseUrl.url);
const expect145 = require('chai').expect;

describe("14.5 Test /graphql UserReadModel after role revert User to Admin", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query145.post('/auth/sign-in')
      .send({ 
      clientId: helper145.clientId.id,
      username: helper145.username.un,
      password: helper145.password.pw 
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
      query145.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect145(res.body)
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
      query145.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect145(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done();
    });
  });
});