let helper145 = require('./helper.ts');
const query145 = require('supertest')(helper145.baseUrl.url);
const expect145 = require('chai').expect;

describe("14.5 Test /graphql UserReadModel after role revert User to Admin", () => {
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query145.post('/graphql')
      .set("Authorization", "Bearer " + helper145.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect145(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId1@theagilemonkeys.com')
      done();
    });
  });      

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com},"+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query145.post('/graphql')
      .set("Authorization", "Bearer " + helper145.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect145(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done();
    });
  });
});