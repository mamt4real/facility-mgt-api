const { Router } = require('express')
const FacilityController = require('../controllers/facilityController')

const facilityRouter = Router({ mergeParams: true })

facilityRouter
  .route('/')
  .get(FacilityController.getAllFacilities)
  .post(FacilityController.createFacility)

facilityRouter
  .route('/:facilityID')
  .get(FacilityController.getFacility)
  .patch(FacilityController.updateFacility)
  .delete(FacilityController.deleteFacility)

module.exports = facilityRouter
