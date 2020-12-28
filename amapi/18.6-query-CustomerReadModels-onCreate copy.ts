let helper186 = require('./helper.ts');
const query186 = require('supertest')(helper186.baseUrl.url);
const expect186 = require('chai').expect;

describe("18.6 Test /graphql CustomerReadModels response onCreate", () => {
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,userId}, "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query186.post('/graphql')
      .set("Authorization", "Bearer " + helper186.token2.at2) 
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
      .set("Authorization", "Bearer " + helper186.token2.at2) 
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
      .set("Authorization", "Bearer " + helper186.token2.at2) 
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