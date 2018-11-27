const path = require("path");
const express = require("express");
const authRoutes = require("./routes/auth");
const passport = require("passport");
const redditRoutes = require("./reddit");
const server = express();
server.use(passport.initialize());
server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));

server.use("/api/v1/reddit", redditRoutes);
server.use("/api/v1/auth", authRoutes);

module.exports = server;
