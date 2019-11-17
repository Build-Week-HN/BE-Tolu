exports.up = function(knex) {
    return knex.schema
  
      .createTable("topArticles", articles => {
        articles.increments();
        articles.integer("article_id").notNullable();
        articles.string("title").notNullable();
        articles.string("url").notNullable();
        articles.integer("rank").notNullable();
        articles.integer("descendants").notNullable();
        articles.integer("score").notNullable();
        articles.string("by").notNullable();
        articles.string("type").notNullable();
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
      .dropTableIfExists("topArticles")
      .dropTableIfExists("users");
  };
  