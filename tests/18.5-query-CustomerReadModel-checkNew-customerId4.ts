let helper185 = require('./helper.ts');
const query185 = require('supertest')(helper185.baseUrl.url);
const expect185 = require('chai').expect;

describe("18.5 Test /graphql CustomerReadModel create response id4", function() {
  beforeEach(done => setTimeout(done, 500));
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " + helper185.token2.at2) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);
      console.log(res.body)
      expect185(res.body.data.CustomerReadModel)
      .to.have.property('name')
      .to.deep.equal('name4')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " + helper185.token2.at2) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect185(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('surname')
      .to.equal('surname4')
      done();
    });
  });   

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'userId' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " + helper185.token2.at2) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect185(res.body)
      .to.have.property('data')
      .and.to.have.property('CustomerReadModel')
      .and.to.have.property('userId')
      .to.equal('userId4@theagilemonkeys.com') 
      done();
    });
  });
});