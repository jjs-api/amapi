let helper101 = require('./helper.ts');
const query101 = require('supertest')(helper101.baseUrl.url);
const expect101 = require('chai').expect;

describe("10.1 Test /graphql CustomerReadModels response onUpdate", () => {
  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[0]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[0])
      .to.have.property('name')
      .and.to.contain('-name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[0]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[0])
      .to.have.property('surname')
      .and.to.contain('-surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[0]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[0])
      .to.have.deep.property('photoUrl')
      .and.to.contain('photo') 
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[0]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[0])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')   
      done();
    });
  });  

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[1]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[1])
      .to.have.property('name')
      .and.to.contain('-name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[1]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[1])
      .to.have.property('surname')
      .and.to.contain('-surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[1]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[1])
      .to.have.deep.property('photoUrl')
      .and.to.contain('photo') 
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[1]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[1])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')      
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'name' value is displayed inside array[2]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[2])
      .to.have.property('name')
      .and.to.contain('-name')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'surname' value is displayed inside array[2]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[2])
      .to.have.property('surname')
      .and.to.contain('-surname')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'photoUrl' value is displayed inside array[2]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect101(res.body.data.CustomerReadModels[2])
      .to.have.deep.property('photoUrl')
      .and.to.contain('photo') 
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModels', " + 
    "WHEN posting body {name,surname,photoUrl,userId}, "+
    "THEN response with expected 'userId' value is displayed inside array[2]",
    done => { 
      query101.post('/graphql')
      .set("Authorization", "Bearer " + helper101.token.at) 
      .send({query: '{CustomerReadModels {name,surname,photoUrl,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);
    
      expect101(res.body.data.CustomerReadModels[2])
      .to.have.property('userId')
      .and.to.contain('@theagilemonkeys.com')  
      done();
    });
  });
});