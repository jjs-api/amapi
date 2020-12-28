let helper163 = require('./helper.ts');
const query163 = require('supertest')(helper163.baseUrl.url);
const expect163 = require('chai').expect;

describe("16.3 Test /graphql DeleteUser request userId3", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send mutation 'DeleteUser', "+ 
    "WHEN posting { username: 'userId3@theagilemonkeys.com'} as per schema, "+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query163.post('/graphql')
      .set("Authorization", "Bearer " + helper163.token.at) 
      .send({query: 'mutation {DeleteUser(input: { username: "userId3@theagilemonkeys.com"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect163(res.body)
      .to.have.property('data')
      .and.to.have.property('DeleteUser')
      .to.equal(true)
      done();
    });
  });
});