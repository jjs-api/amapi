let helper31 = require('./helper.ts');
const query31 = require('supertest')(helper31.baseUrl.url);
const expect31 = require('chai').expect;

describe("3.1 Test /graphql UserReadModel create response #1", () => {
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query31.post('/graphql')
      .set("Authorization", "Bearer " + helper31.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect31(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId1@theagilemonkeys.com')
      done();
      })
    }),

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId1@theagilemonkeys.com}, "+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query31.post('/graphql')
      .set("Authorization", "Bearer " + helper31.token.at) 
      .send({query: '{UserReadModel(id:"userId1@theagilemonkeys.com"){id,role}}'})
      .end(function(err, res) {
      if (err) return done(err);    

      expect31(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done();
    });
  });
});
