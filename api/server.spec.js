const request = require("supertest");
const db = require("../database/dbConfig");
const knex = require("../database/dbConfig");
const server = require("./server");

beforeAll(async () => {
  return knex.seed.run();
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

describe("POST /api/auth/login", () => {
  test("does not allow incorrect credentials", () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        password: "test"
      })
      .expect({
        message:
          "missing required text field, please check username or password fields"
      });
  });

});
