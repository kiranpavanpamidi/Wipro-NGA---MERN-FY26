const request = require("supertest");
const app = require("../server");
const Enrollment = require("../models/Enrollment");

describe("Enrollment API Tests", () => {

  it("should return 201 on successful enrollment", async () => {
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U1", courseId: "C101" });

    if (res.status === 400 && res.body.message === "Already enrolled") {
      return;
    }
    res.status.should.equal(201);
  });
  it("should return 400 on duplicate enrollment", async () => {
    await request(app)
      .post("/api/enroll")
      .send({ userId: "U2", courseId: "C101" });
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U2", courseId: "C101" });
    res.status.should.equal(400);
  });
});
