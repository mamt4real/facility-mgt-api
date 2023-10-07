const { Router } = require('express')
const DashboardController = require('../controllers/dashboardController')

const dashboardRouter = Router()

dashboardRouter.get('/', DashboardController.getDashboard)

module.exports = dashboardRouter
