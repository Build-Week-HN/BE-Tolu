const knex = require('knex')
const dbEnv = process.env.DB_ENV || "development"
const knexConfig = require('../knexfile')

module.exports = knex(knexConfig[dbEnv])