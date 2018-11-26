const conn = require('./connection')

const hashGenerate = require('../auth/hash')
// userExists(username:string):Promise<boolean>
function userExists(username, db = conn) { // use conn unless test framework passes an different connection
  // console.log("Users db userExists check")
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      console.log("userExists query result", count)
      return count[0].n > 0 // false = username not exists
    })
}

function getUser(id, db = conn) {
  console.log("Server DB users getUser SQL: ", db('users').select().where('id', id).toString())
  return db('users')
    .select()
    .where('id', id)
    .then(
      user => {
        console.log("server db users getUser id, user/result >>>>  ", id, user)
        return user
      }
    )
}

// createUser(newUser:{username:string, password:string}):Promise
function createUser(username, password, db = conn) {
  // console.log("db users insert sql: ", db('users').insert({ username: username, hash: password }).toString())
  const hashedPassword = hashGenerate(password)
  console.log("Users route, createUser: password, hashedPassword: ", password, hashedPassword)
  return db('users')
    .insert({ username: username, hash: hashedPassword })
    .then(result => {
      console.log("users db insert user result: ", result)
      return result
    })
}

module.exports = {
  userExists,
  createUser,
  getUser
}
