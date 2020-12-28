let helper186 = require('./helper.ts');
const query186 = require('supertest')(helper186.baseUrl.url);
const expect186 = require('chai').expect;

describe("18.6 Test /graphql CustomerReadModels response onCreate", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query186.post('/auth/sign-in')
      .send({ 
      clientId: helper186.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper186.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,userId}, "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query186.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect186(res.body.data.CustomerReadModels[0])
      .to.have.property('name')
      .and.to.contain('name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,userId}, "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query186.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect186(res.body.data.CustomerReadModels[0])
      .to.have.property('surname')
      .and.to.contain('surname')
      done();
    });
  });

    it("GIVEN I send query 'CustomerReadModels', " + 
      "WHEN posting body {name,surname,userId}, "+
      "THEN response with expected 'userId' value is displayed",
      done => { 
      query186.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModels {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect186(res.body.data.CustomerReadModels[0])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')
      done();
    });
  });
});