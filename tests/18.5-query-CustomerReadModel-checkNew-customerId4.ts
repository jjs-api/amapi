let helper185 = require('./helper.ts');
const query185 = require('supertest')(helper185.baseUrl.url);
const expect185 = require('chai').expect;

describe("18.5 Test /graphql CustomerReadModel create response id4", function() {
  var idToken = null;
  beforeEach(done => setTimeout(done, 500))
  beforeEach(function(done) {
    query185.post('/auth/sign-in')
      .send({ 
      clientId: helper185.clientId.id,
      username: "userId4@theagilemonkeys.com",
      password: helper185.password.pw 
    })
    .end(function(err, res) {
      idToken = res.body.idToken;
      done();
    });
});

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " + idToken) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect185(res.body.data.CustomerReadModel)
      .to.have.property('name')
      .to.equal('name4')
      done();
    });
  });

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'surname' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " +  idToken) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect185(res.body.data.CustomerReadModel)
      .to.have.property('surname')
      .to.equal('surname4')
      done();
    });
  });   

  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'userId' value is displayed",
    done => { 
      query185.post('/graphql')
      .set("Authorization", "Bearer " +  idToken) 
      .send({query: '{CustomerReadModel (id:4) {name,surname,userId}}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect185(res.body.data.CustomerReadModel)
      .to.have.property('userId')
      .to.equal('userId4@theagilemonkeys.com') 
      done();
    });
  });
});