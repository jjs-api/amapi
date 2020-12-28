let helper91 = require('./helper.ts');
const query91 = require('supertest')(helper91.baseUrl.url);
const expect91 = require('chai').expect;

describe("9.1 Test /graphql CustomerReadModel update response id1", () => {
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query91.post('/graphql')
      .set("Authorization", "Bearer " + helper91.token.at) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect91(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('name')
      .to.equal('-name1')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query91.post('/graphql')
      .set("Authorization", "Bearer " + helper91.token.at) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect91(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('-surname1')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:1), "+
    "THEN response with expected 'photoUrl' value is displayed",
    done => { 
      query91.post('/graphql')
      .set("Authorization", "Bearer " + helper91.token.at) 
      .send({query: '{CustomerReadModel (id:1) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect91(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.deep.property('photoUrl')
      .and.to.contain('photo')
      done();
    });
  });
});