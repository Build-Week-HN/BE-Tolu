const request = require("supertest");
const db = require("../database/dbConfig");

const server = require("./server");

beforeEach(async () => {
  await db("users").truncate();
});

describe("server.js", () => {
  describe("server running", () => {
    it("Server Running", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.text).toBe("Server is running");
          expect(res.status).toBe(200);
        });
    });
  });
  describe("auth route", () => {
    it("can successfully signup", async () => {
      return request(server)
        .post("/api/auth/register")
        .set("Accept", "application/json")
        .send({ username: "tolu", email: "tolu@email.com", password: "test" });
    });
  });
});

describe("LOGIN Endpoint", () => {
  xit("should return status 200 on login", async () => {
    //user registers
    const response = await request(server)
      .post("/api/auth/register")
      .send({ username: "tyde", password: "password" });

    //user logs in
    const loginRes = await request(server)
      .post("/api/auth/login")
      .send({ username: "tolu", email: "tolu@email.com", password: "test" });
    expect(loginRes.status).toBe(200);
    console.log(loginRes)
  });
});
