const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("Courses API", () => {

  it("should return all courses", (done) => {
    chai.request(app)
      .get("/api/v1/courses")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("should create a new course", (done) => {
    chai.request(app)
      .post("/api/v1/courses")
      .send({ name: "React Basics" })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        done();
      });
  });

  it("should update a course", (done) => {
    chai.request(app)
      .put("/api/v1/courses/1")
      .send({ name: "HTML Updated" })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should delete a course", (done) => {
    chai.request(app)
      .delete("/api/v1/courses/1")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});
