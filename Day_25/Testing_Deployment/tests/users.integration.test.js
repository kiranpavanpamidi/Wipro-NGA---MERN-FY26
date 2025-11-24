const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../server");
describe("Users Integration Test", () => {
  it("GET /api/users should return 404 because route not implemented", async () => {
    const res = await request(app).get("/api/users");
    expect(res.status).to.equal(404);
  });
});
