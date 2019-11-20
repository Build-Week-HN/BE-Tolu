const request = require("supertest");
const server = require("../api/server");

describe("Article Router", () => {
  it("if status is 200 OK", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.statusCode).toBe(200);
      });
  });
  it("checks property in the articles object", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.body[0]).toHaveProperty("article_id");
      });
  });
  it("checks length of body array", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.body).toHaveLength(20);
      });
  });
});
