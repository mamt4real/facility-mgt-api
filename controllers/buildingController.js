const Building = require('../models/Building')
const factory = require('../utils/handlerFactory')

const createBuilding = factory.createOne(Building)
const getAllBuildings = factory.getAll(Building)
const getBuilding = factory.getOne(Building)
const updateBuilding = factory.updateOne(Building)
const deleteBuilding = factory.deleteOne(Building)

module.exports = {
  createBuilding,
  getAllBuildings,
  getBuilding,
  updateBuilding,
  deleteBuilding,
}
