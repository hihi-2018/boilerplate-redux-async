const sodium = require('sodium').api

function generate(clearTextPassword) {
  const passwordBuffer = Buffer.from(clearTextPassword, 'utf8')
  return sodium.crypto_phwash_str(
    passwordBuffer,
    sodium.crypto_phwash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_phwash_MEMLIMIT_INTERACTIVE
  )
}

module.exports = generate