const express = require('express')
// const request = require('superagent')

const router = express.Router()

const usersDb = require('../db/users')
// const {userExists, createUser} = require('../db/users) // alt

router.use(express.json())

router.post('/register', register)

function register(req, res) {
  console.log("Auth route register body: ", req.body)
  // handle registration
  // const username = req.body.username
  // const password = req.body.password
  const { username, password } = req.body

  console.log("routes / auth : username and password: ", username, password)

  // check if username available
  usersDb.userExists(username)
    .then(exists => {
      if (!exists) {
        usersDb
          .createUser(username, password)
          .then(result => {
            console.log("auth route register, create user result", result)
            res
              .status('201')
              .end()
          }
          )
      } else {
        res
          .status('400')
          .send({ message: 'Username already taken' })
      }
    }
    )
}

module.exports = router
