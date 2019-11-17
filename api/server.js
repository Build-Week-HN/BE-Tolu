const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
require("../articles/cronJob");

const articlesRouter = require("../articles/articles-router");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/stories", articlesRouter);
server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;
