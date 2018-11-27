const express = require("express");
const router = express.Router();
const { userExists, createUser } = require("../db/users");
router.post("/register", register);

function register(req, res) {
  const { username, password } = req.body;
  userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: "user exists" });
      }
      createUser(username, password).then(() => res.status(201).end());
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  // TODO: make sure username doesnt already exist
  // TODO: if not, hash the password and add the user to the database
}

router.post("/login", login);

function login(req, res) {
  const { username, password } = req.body;
  userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: "user exists" });
      }
      createUser(username, password).then(() => res.status(201).end());
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
module.exports = router;
