const Facility = require('../models/Facility')
const factory = require('../utils/handlerFactory')

const createFacility = factory.createOne(Facility)
const getAllFacilities = factory.getAll(Facility)
const getFacility = factory.getOne(Facility)
const updateFacility = factory.updateOne(Facility)
const deleteFacility = factory.deleteOne(Facility)

module.exports = {
  createFacility,
  getAllFacilities,
  getFacility,
  updateFacility,
  deleteFacility,
}
