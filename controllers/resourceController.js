const Resource = require('../models/Resource')
const factory = require('../utils/handlerFactory')

const createResource = factory.createOne(Resource)
const getAllResources = factory.getAll(Resource)
const getResource = factory.getOne(Resource)
const updateResource = factory.updateOne(Resource)
const deleteResource = factory.deleteOne(Resource)

module.exports = {
  createResource,
  getAllResources,
  getResource,
  updateResource,
  deleteResource,
}
