let helper61 = require('./helper.ts');
const query61 = require('supertest')(helper61.baseUrl.url);
const expect61 = require('chai').expect;

describe("6.1 Test /graphql CustomerReadModel create response id1", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query61.post('/auth/sign-in')
      .send({ 
      clientId: helper61.clientId.id,
      username: helper61.username.un,
      password: helper61.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query61.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect61(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('name')
      .to.equal('name1')
      done();
    });
  });    

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1),"+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query61.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect61(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('surname1')
      done();
    });
  });   

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1),"+
    "THEN response with expected 'photoUrl' value is displayed",
    done => { 
      query61.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect61(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('photoUrl')
      .and.to.contain('photo')
      done();
    });
  });
});