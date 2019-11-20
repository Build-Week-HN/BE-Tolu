const Users = require("../users/users-models");
const db = require("../database/dbConfig");

beforeEach(() => {
  return db("users").truncate();
});

describe("Users model", () => {
  describe("Add user function", () => {
    it("Should add user to db", async () => {
      await Users.add({
        username: "josh",
        email: "josh@email.com",
        password: "test"
      });

      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });
});
