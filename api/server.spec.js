const request = require("supertest");

const server = require("./server");

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
    it("can successfully login", async () => {
      await request(server)
        .post("/api/auth/register")
        .set("Accept", "application/json")
        .send({
          username: "rue",
          email: "rue@email.com",
          password: "test"
        });

      let response = await request(server)
        .post("/api/auth/login")
        .set("Accept", "application/json")
        .send({
          username: "rue",
          password: "test"
        });
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual(`Welcome rue!`);
    });
    it("does not allow incorrect credentials", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          username:"",
          password: "test"
        })
        .expect({
          message:
            "missing required text field, please check username or password fields"
        });
    });
    it("It should require authorization", () => {
      return request(server)
        .post("/api/auth/login")
        .then(response => {
          expect(response.statusCode).toBe(400);
        });
    });
  });
});
