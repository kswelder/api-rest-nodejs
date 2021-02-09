const knex = require('knex')
const knexFile = require('../../knexfile')

const server = knex(knexFile.development)

module.exports = server
