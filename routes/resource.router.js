const { Router } = require('express')
const ResourceController = require('../controllers/resourceController')
const {
  uploadSingleImage,
  resizeResourceImage,
} = require('../utils/multerHandler')

const resourceRouter = Router({ mergeParams: true })

resourceRouter
  .route('/')
  .get(ResourceController.getAllResources)
  .post(
    uploadSingleImage,
    resizeResourceImage,
    ResourceController.createResource
  )

resourceRouter
  .route('/:resourceID')
  .get(ResourceController.getResource)
  .patch(
    uploadSingleImage,
    resizeResourceImage,
    ResourceController.updateResource
  )
  .delete(ResourceController.deleteResource)

module.exports = resourceRouter
