const usersDb = require('../db/users')

const jwt = require('jsonwebtoken')

const verifyJwt = require('express-jwt')


// Because we're going to use it as Express middleware, it should have this signature:
// issue(req:Request, res:Response, next:Function)

function issue(req, res, next) {
  const username = req.body.username // this is just on first register? or login?
  usersDb.getUserByUsername(username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: "Authentication successful",
        token: token
      })
    })

}

function createToken(user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  },
    secret, {
      expiresIn: '1d'
    }
  )
}


// used as Express router middleware on all routes that need authentication.
// That means the signature of the decode function should look like this:
// decode(req:Request, res:Response, next:Function)
function decode(req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = {
  issue,
  decode
}