let helper62 = require('./helper.ts');
const query62 = require('supertest')(helper62.baseUrl.url);
const expect62 = require('chai').expect;

describe("6.2 Test /graphql CustomerReadModel create response id2", () => {
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query62.post('/graphql')
      .set("Authorization", "Bearer " + helper62.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect62(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('name')
      .to.equal('name2')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query62.post('/graphql')
      .set("Authorization", "Bearer " + helper62.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect62(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('surname2')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:2), "+
    "THEN response with expected 'photoUrl' value is displayed",
    done => { 
      query62.post('/graphql')
      .set("Authorization", "Bearer " + helper62.token.at) 
      .send({query: '{CustomerReadModel (id:2) {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect62(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('photoUrl')
      .and.to.contain('photo')
      done();
    });
  });
});