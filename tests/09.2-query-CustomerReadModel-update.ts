let helper92 = require('./helper.ts');
const query92 = require('supertest')(helper92.baseUrl.url);
const expect92 = require('chai').expect;

describe("9.2 Test /graphql CustomerReadModel update response id2", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query92.post('/graphql')
      .set("Authorization", "Bearer " + helper92.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect92(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('name')
      .to.equal('-name2')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query92.post('/graphql')
      .set("Authorization", "Bearer " + helper92.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect92(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('-surname2')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'photoUrl' value is displayed",
    done => { 
      query92.post('/graphql')
      .set("Authorization", "Bearer " + helper92.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect92(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.deep.property('photoUrl')
      .and.to.contain('photo')
      done();
    });
  });
});