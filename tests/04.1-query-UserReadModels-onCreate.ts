let helper41 = require('./helper.ts');
const query41 = require('supertest')(helper41.baseUrl.url);
const expect41 = require('chai').expect;

describe("4.1 Test /graphql UserReadModels response", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role}, "+
    "THEN response with expected 'id' value is displayed inside array[0]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[0])
      .to.have.deep.property('id')
      .and.to.contain('@theagilemonkeys.com')
      done()
    })
  }),     

  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role},"+
    "THEN response with expected 'role' value is displayed inside array[0]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[0])
      .to.have.deep.property('role')
      .and.to.equal('Admin')
      done()
    })
  }),        

  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role},"+
    "THEN response with expected 'id' value is displayed inside array[1]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[1])
      .to.have.deep.property('id')
      .and.to.contain('@theagilemonkeys.com')
      done()
    })
  }),        

  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role},"+
    "THEN response with expected 'role' value is displayed inside array[1]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[1])
      .to.have.deep.property('role')
      .and.to.equal('Admin')
      done()
    })
  }),      
  
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role},"+
    "THEN response with expected 'id' value is displayed inside array[2]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[2])
      .to.have.deep.property('id')
      .and.to.contain('@theagilemonkeys.com')
      done()
    })
  }),      
  
  it("GIVEN I send query 'UserReadModels', " + 
    "WHEN posting body {id,role},"+
    "THEN response with expected 'role' value is displayed inside array[2]",
    done => { 
      query41.post('/graphql')
      .set("Authorization", "Bearer " + helper41.token.at) 
      .send({query: '{UserReadModels {id,role}}'})
      .end(function(err, res) {
      if (err) return done(err)

      expect41(res.body.data.UserReadModels[2])
      .to.have.deep.property('role')
      .and.to.equal('Admin')
      done()
    });
  });
});