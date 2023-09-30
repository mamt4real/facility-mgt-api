const { Router } = require('express')
const BuildingController = require('../controllers/buildingController')

const buildingRouter = Router({ mergeParams: true })

buildingRouter
  .route('/')
  .get(BuildingController.getAllBuildings)
  .post(BuildingController.createBuilding)

buildingRouter
  .route('/:BuildingID')
  .get(BuildingController.getBuilding)
  .patch(BuildingController.updateBuilding)
  .delete(BuildingController.deleteBuilding)

module.exports = buildingRouter
