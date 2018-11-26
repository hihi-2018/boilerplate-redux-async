const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment] // bracket notation to get the property from knexfile
const connection = require('knex')(config)

module.exports = connection