let helper152 = require('./helper.ts');
const query152 = require('supertest')(helper152.baseUrl.url);
const expect152 = require('chai').expect;

describe("15.2 Test /graphql UserReadModel New Password check", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query152.post('/graphql')
      .set("Authorization", "Bearer " + helper152.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect152(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId1@theagilemonkeys.com')
      done();
    });
  });      

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query152.post('/graphql')
      .set("Authorization", "Bearer " + helper152.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect152(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done();
    });
  });
});