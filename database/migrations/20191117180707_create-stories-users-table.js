exports.up = function(knex) {
    return knex.schema
      .createTable("topStories", stories => {
        stories.increments();
        stories.integer("article_id").notNullable();
        stories.string("title").notNullable();
        stories.string("url").notNullable();
        stories.integer("descendants").notNullable();
        stories.integer("score").notNullable();
        stories.string("by").notNullable();
        stories.string("type").notNullable();
      })
  
      .createTable("users", users => {
        users.increments();
  
        users
          .string("username", 128)
          .notNullable()
          .unique();
  
        users.string("password", 128).notNullable();
  
        users
          .string("email", 128)
          .notNullable()
          .unique();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("topStories")
      .dropTableIfExists("users");
  };
  