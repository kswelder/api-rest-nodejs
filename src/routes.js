const routes = require('express').Router()
const userController = require('./controllers/userController')

routes.use(userController)

module.exports = routes
