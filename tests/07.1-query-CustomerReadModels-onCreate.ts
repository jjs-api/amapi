let helper71 = require('./helper.ts');
const query71 = require('supertest')(helper71.baseUrl.url);
const expect71 = require('chai').expect;

describe("7.1 Test /graphql CustomerReadModels response onCreate", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query71.post('/auth/sign-in')
      .send({ 
      clientId: helper71.clientId.id,
      username: helper71.username.un,
      password: helper71.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[0]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[0])
      .to.have.property('name')
      .and.to.contain('name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[0]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[0])
      .to.have.property('surname')
      .and.to.contain('surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[0]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[0])
      .to.have.property('photoUrl')
      .and.to.contain('photo') 
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[0]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[0])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')   
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[1]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[1])
      .to.have.property('name')
      .and.to.contain('name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[1]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[1])
      .to.have.property('surname')
      .and.to.contain('surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[1]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[1])
      .to.have.property('photoUrl')
      .and.to.contain('photo') 
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[1]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);
    
      expect71(res.body.data.CustomerReadModels[1])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')
      done();
    });
  });    

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[2]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[2])
      .to.have.property('name')
      .and.to.contain('name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[2]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[2])
      .to.have.property('surname')
      .and.to.contain('surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[2]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[2])
      .to.have.property('photoUrl')
      .and.to.contain('photo') 
      done();
      });
    });    

    it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[2]",
    done => { 
      query71.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect71(res.body.data.CustomerReadModels[2])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')  
      done();
    });
  });
});