const knex = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");
// beforeAll(async () => {
//   await knex.seed.run();
// });
beforeEach(async () => {
  await knex.seed.run();
  // return db("topArticles").truncate();
});

describe("Article Router", () => {
  it("if status is 200 OK", () => {
    return request(server)
      .get("/api/articles")
      .then(res => {
        expect(res.statusCode).toBe(200);
        //console.log(res.body[0])
        expect(res.body[0]).toHaveProperty("article_id");
        expect(res.body).toHaveLength(20j);
      });
  });
});
