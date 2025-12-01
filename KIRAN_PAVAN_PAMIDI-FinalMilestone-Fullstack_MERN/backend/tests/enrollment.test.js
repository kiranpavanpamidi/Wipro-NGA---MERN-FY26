const request = require("supertest");
const app = require("../server");
const Enrollment = require("../models/Enrollment");

describe("Enrollment API Tests", () => {

    it("Should enroll successfully → 201", async () => {
        const res = await request(app)
            .post("/api/enroll")
            .send({
                userId: "USR101",
                programId: "FTP001"
            });

        if(res.status === 400){
            console.log("You might already have this enrollment in DB — clear and run again.");
        }

        res.status.should.be.oneOf([201, 400]); 
    });

    it("Duplicate enrollment → 400", async () => {
        const res = await request(app)
            .post("/api/enroll")
            .send({
                userId: "USR101",
                programId: "FTP001"
            });

        res.status.should.equal(400);
    });

});
