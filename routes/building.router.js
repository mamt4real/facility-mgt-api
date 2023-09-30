const { Router } = require('express')
const BuildingController = require('../controllers/buildingController')
const {
  uploadSingleImage,
  resizeBuildingImage,
} = require('../utils/multerHandler')

const buildingRouter = Router({ mergeParams: true })

buildingRouter
  .route('/')
  .get(BuildingController.getAllBuildings)
  .post(
    uploadSingleImage,
    resizeBuildingImage,
    BuildingController.createBuilding
  )

buildingRouter
  .route('/:BuildingID')
  .get(BuildingController.getBuilding)
  .patch(
    uploadSingleImage,
    resizeBuildingImage,
    BuildingController.updateBuilding
  )
  .delete(BuildingController.deleteBuilding)

module.exports = buildingRouter
