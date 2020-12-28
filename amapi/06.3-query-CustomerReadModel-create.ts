let helper63 = require('./helper.ts');
const query63 = require('supertest')(helper63.baseUrl.url);
const expect63 = require('chai').expect;

describe("6.3 Test /graphql CustomerReadModel create response id3", () => {
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:3), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query63.post('/graphql')
      .set("Authorization", "Bearer " + helper63.token.at) 
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
      .set("Authorization", "Bearer " + helper63.token.at) 
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
      .set("Authorization", "Bearer " + helper63.token.at) 
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