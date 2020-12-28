let helper12 = require('./helper.ts');
const query12 = require('supertest')(helper12.baseUrl.url);
const expect12 = require('chai').expect;

describe("1.2 /graphql ensure DeleteCustomer id1 before test run", function() {
  beforeEach(done => setTimeout(done, 500))
  it("Ensure Customer 'id1' does not exist before test run",
    done => { 
      query12.post('/graphql')
      .set("Authorization", "Bearer " + helper12.token.at) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 1})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});