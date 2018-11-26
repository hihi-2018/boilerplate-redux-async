
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', t => {
    t.increments('id')
    t.string('username')
    t.string('hash') // not store the password, just its hash
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users') 
};
