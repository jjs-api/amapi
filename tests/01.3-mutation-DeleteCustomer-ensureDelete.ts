let helper13 = require('./helper.ts');
const query13 = require('supertest')(helper13.baseUrl.url);
const expect13 = require('chai').expect;

describe("1.3 /graphql ensure DeleteCustomer id2 before test run", function() {
  beforeEach(done => setTimeout(done, 500))
  it("Ensure Customer 'id2' does not exist before test run",
    done => { 
      query13.post('/graphql')
      .set("Authorization", "Bearer " + helper13.token.at) 
      .send({query: 'mutation {DeleteCustomer(input: {id: 2})}'})
      .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});