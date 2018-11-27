const express = require('express')
// const request = require('superagent')

const router = express.Router()

const usersDb = require('../db/users')
// const {userExists, createUser} = require('../db/users) // alt

const token = require('../auth/token')

router.use(express.json())


// ROUTES API

router.post('/register', register, token.issue) // token.issue is a function

router.get('/username', token.decode, (req, res) => {
  res.json({
    username: req.user.username
  })
})

function register(req, res, next) {
  console.log("Auth route register body: ", req.body)
  // handle registration
  // const username = req.body.username
  // const password = req.body.password
  const { username, password } = req.body

  console.log("routes / auth : username and password: ", username, password)

  // check if username available
  usersDb.userExists(username)
    .then(exists => {
      if(!exists) {
        usersDb
          .createUser(username, password)
          // .then(new_user_id => {
          //   console.log("auth route register, create user result> id: ", new_user_id)
          //   // get the newly created user from the db to return it
          //   usersDb.getUser(new_user_id)
          //     .then(new_user => {
          //       res
          //         .status('201') // TODO return newly created user?
          //         .send({
          //           message: "successfully created user, id=" + new_user_id,
          //           user: new_user || "shouldn't see this"
          //         })
          //     })
          // })
          .then(() => next())
          .catch(err => {
            res.status(400).json({ message: "problem: " + err })
          })
      }
      else {
        return res.status('400').send({ message: 'Username already taken' })
      }
    })
    .catch(err => {
      res.status(500).send({ error_message: err.message })
    })
}



module.exports = router
