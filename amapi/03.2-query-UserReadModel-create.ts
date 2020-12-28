let helper32 = require('./helper.ts');
const query32 = require('supertest')(helper32.baseUrl.url);
const expect32 = require('chai').expect;

describe("3.2 Test /graphql UserReadModel create response #2", () => {
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId2@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query32.post('/graphql')
      .set("Authorization", "Bearer " + helper32.token.at) 
      .send({query: '{UserReadModel (id:"userId2@theagilemonkeys.com") {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect32(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId2@theagilemonkeys.com')
      done()
    })
  }),  

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId2@theagilemonkeys.com}, "+
    "THEN response with expected 'role' value is displayed",
    done => { 
      query32.post('/graphql')
      .set("Authorization", "Bearer " + helper32.token.at) 
      .send({query: '{UserReadModel (id:"userId2@theagilemonkeys.com") {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err) 

      expect32(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')  
      done()
    });
  });
});