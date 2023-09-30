const { Router } = require('express')
const ResourceController = require('../controllers/resourceController')

const resourceRouter = Router({ mergeParams: true })

resourceRouter
  .route('/')
  .get(ResourceController.getAllResources)
  .post(ResourceController.createResource)

resourceRouter
  .route('/:ResourceID')
  .get(ResourceController.getResource)
  .patch(ResourceController.updateResource)
  .delete(ResourceController.deleteResource)

module.exports = resourceRouter
