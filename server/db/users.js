const conn = require('./connection')

const hash = require('../auth/hash')
// userExists(username:string):Promise<boolean>
function userExists(username, db = conn) {  // use conn unless test framework passes an different connection
  // console.log("Users db userExists check")
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      console.log("userExists query result", count)
      return count[0].n > 0 // false = username not exists
    })
}

// createUser(newUser:{username:string, password:string}):Promise
function createUser(username, password, db = conn) {
  // console.log("db users insert sql: ", db('users').insert({ username: username, hash: password }).toString())
  return db('users')
    .insert({ username: username, hash: password })
    .then(result => {
      console.log("users db insert user result: ", result)
    })
}

module.exports = {
  userExists,
  createUser
}


