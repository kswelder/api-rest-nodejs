const routes = require('express').Router()
const route = require('./controllers/userController')
const routes = require('./controllers/userController')
const userController = require('./controllers/userController')

routes.use(userController)

module.exports = routes
