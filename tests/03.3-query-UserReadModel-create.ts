let helper33 = require('./helper.ts');
const query33 = require('supertest')(helper33.baseUrl.url);
const expect33 = require('chai').expect;

describe("3.3 Test /graphql UserReadModel create response userId3", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId3@theagilemonkeys.com}, "+
    "THEN response with expected 'id' value is displayed",
    done => { 
      query33.post('/graphql')
      .set("Authorization", "Bearer " + helper33.token.at) 
      .send({query: '{UserReadModel (id:"userId3@theagilemonkeys.com") {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect33(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('id')
      .to.equal('userId3@theagilemonkeys.com')
      done()
    })
  }),    

  it("GIVEN I send query 'UserReadModel', " + 
    "WHEN posting {id:userId3@theagilemonkeys.com}, "+ 
    "THEN response with expected 'role' value is displayed",
    done => { 
      query33.post('/graphql')
      .set("Authorization", "Bearer " + helper33.token.at) 
      .send({query: '{UserReadModel (id:"userId3@theagilemonkeys.com") {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect33(res.body)
      .to.have.property('data')
      .and.to.have.property('UserReadModel')
      .and.to.have.property('role')
      .to.equal('Admin')
      done()
    })
  })
});