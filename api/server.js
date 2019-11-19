const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
require("../articles/cronJob");


const authRouter = require("../auth/auth-router");
const articlesRouter = require("../articles/articles-router");
const userRouter = require("../users/users-router");

const server = express();




server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/articles", articlesRouter);
server.use("/api/users", userRouter);
server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;
