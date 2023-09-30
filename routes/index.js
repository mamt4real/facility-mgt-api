const { Router } = require('express')
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const facilityRouter = require('./facility.router')
const buildingRouter = require('./building.router')
const resourceRouter = require('./resource.router')
const { protectedRoute } = require('../middlewares/auth')

// Version One Routes
const v1Router = Router()

v1Router.use('/auth', authRouter)

v1Router.use(protectedRoute)
v1Router.use('/users', userRouter)
v1Router.use('/buildings', buildingRouter)
v1Router.use('/facilities', facilityRouter)
v1Router.use('/resources', resourceRouter)

module.exports = { v1Router }
