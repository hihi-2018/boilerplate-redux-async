const sodium_api = require('sodium').api

function generate(clearTextPassword) {
  console.log("server auth hash generate: entry: ", clearTextPassword)
  const passwordBuffer = Buffer.from(clearTextPassword, 'utf8')
  console.log("server auth hash generate: buffered: ", passwordBuffer)
  const hashedPassword = sodium_api.crypto_pwhash_str(
    passwordBuffer,
    sodium_api.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium_api.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
  console.log("Server auth hash generate: clear and hashed pwd: ", clearTextPassword, hashedPassword)

  return hashedPassword
}

module.exports = generate