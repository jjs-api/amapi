let helper142 = require('./helper.ts');
const query142 = require('supertest')(helper142.baseUrl.url);
const expect142 = require('chai').expect;

describe("14.2 Test /graphql ChangeUser from Admin to User", () => {
  it("GIVEN I send mutation 'ChangeUser', "+ 
    "WHEN posting input {username:'userId1@theagilemonkeys.com',password:'Admin.2020',role:'User'} as per schema, "+
    "Changing role from Admin to User,"+
    "THEN response with expected 'true' value is displayed",
    done => { 
      query142.post('/graphql')
      .set("Authorization", "Bearer " + helper142.token.at) 
      .send({query: 'mutation {ChangeUserRole(input: {username:"userId1@theagilemonkeys.com",password:"Admin.2020",role:"User"})}'})
      .end(function(err, res) {
      if (err) return done(err);

      expect142(res.body)
      .to.have.property('data')
      .and.to.have.property('ChangeUserRole')
      .and.to.equal(true)
      done();
    });
  });
});