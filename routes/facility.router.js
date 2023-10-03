const { Router } = require('express')
const FacilityController = require('../controllers/facilityController')
const {
  uploadSingleImage,
  resizeFacilityImage,
} = require('../utils/multerHandler')

const facilityRouter = Router({ mergeParams: true })

facilityRouter
  .route('/')
  .get(FacilityController.getAllFacilities)
  .post(
    uploadSingleImage,
    resizeFacilityImage,
    FacilityController.createFacility
  )

facilityRouter
  .route('/:facilityID')
  .get(FacilityController.getFacility)
  .patch(
    uploadSingleImage,
    resizeFacilityImage,
    FacilityController.updateFacility
  )
  .delete(FacilityController.deleteFacility)

facilityRouter
  .route('/:facilityID/resources')
  .get(FacilityController.getFacilityResources)
  .post(FacilityController.addResourceToFacility)

facilityRouter
  .route('/:facilityID/resources/:resourceID')
  .patch(FacilityController.updateFacilityResource)
  .delete(FacilityController.removeResourceFromFacility)

module.exports = facilityRouter
