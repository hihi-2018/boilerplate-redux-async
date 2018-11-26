const usersDb = require('../db/users')

const jwt = require('jsonwebtoken')

// Because we're going to use it as Express middleware, it should have this signature:
// issue(req:Request, res:Response, next:Function)

function issue(req, res) {
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

module.exports = {
  issue
}