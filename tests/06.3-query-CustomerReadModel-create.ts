let helper63 = require('./helper.ts');
const query63 = require('supertest')(helper63.baseUrl.url);
const expect63 = require('chai').expect;

describe("6.3 Test /graphql CustomerReadModel create response id3", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query63.post('/auth/sign-in')
      .send({ 
      clientId: helper63.clientId.id,
      username: helper63.username.un,
      password: helper63.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query63.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:3) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect63(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('name')
      .to.equal('name3')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query63.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:3) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect63(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('surname3')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3), "+
    "THEN response with expected 'photoUrl' value is displayed",
    done => { 
      query63.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:3) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);
      
      expect63(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('photoUrl')
      .and.to.contain('photo')
      done();
    });
  });
});