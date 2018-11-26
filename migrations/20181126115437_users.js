exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', t => {
    t.increments('id')
    t.string('username').unique().notNull()
    t.string('hash').notNull() // not store the password, just its hash
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
