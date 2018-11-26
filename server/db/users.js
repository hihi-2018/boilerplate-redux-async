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
    .where('id', id)
    .select()
    .first()
    .then(
      user => {
        console.log("server db users getUser id, user/result >>>>  ", id, user)
        return user
      }
    )
}

function getUserByUsername(username, db = conn) {
  return db('users')
    .select()
    .where('username', username)
    .first()
    .then(
      user => {
        console.log("server db users getUserByUsername username, user/result >>>>  ", username, user)
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
    .then(result => result[0]) // as results are returned from knex in an array
    .then(new_user_id => {
      console.log("users db insert user result id: ", new_user_id)
      return new_user_id
    })
}

module.exports = {
  userExists,
  createUser,
  getUser,
  getUserByUsername
}
