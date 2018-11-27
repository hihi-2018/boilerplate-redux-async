var development = require("../../knexfile").development;
var knex = require("knex")(development);
module.exports = knex;
