let helper184 = require('./helper.ts');
const query184 = require('supertest')(helper184.baseUrl.url);
const expect184 = require('chai').expect;

describe("18.4 Test /graphql SaveCustomer create request id4", function() {
  beforeEach(done => setTimeout(done, 500))
  it("GIVEN I send query 'CustomerReadModel', " + 
    "WHEN posting (id:4), "+
    "THEN response with expected 'name' value is displayed",
    done => { 
    query184.post('/graphql')
    .set("Authorization", "Bearer " + helper184.token2.at2) 
    .send({query: 'mutation {SaveCustomer(input: {id: 4,name: "name4",surname: "surname4"})}'})
    .end(function(err, res) {
    if (err) return done(err);

    expect184(res.body)
    .to.have.property('data')
    .and.to.have.property('SaveCustomer')
    .to.equal(true)
    done();
    });
  });
});