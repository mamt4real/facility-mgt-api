const { Router } = require('express')
const UserController = require('../controllers/userController')
const { protectedRoute, restrictRouteTo } = require('../middlewares/auth')
const { uploadSingleImage, resizeUserPhoto } = require('../utils/multerHandler')

const userRouter = Router({ mergeParams: true })

userRouter
  .route('/')
  .get(restrictRouteTo('admin'), UserController.getAllUsers)
  .post(restrictRouteTo('admin'), UserController.createUser)

userRouter
  .route('/me')
  .get(UserController.getMe)
  .patch(uploadSingleImage, resizeUserPhoto, UserController.updateMe)
  .delete(UserController.deleteMe)

userRouter
  .route('/:userID')
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser)

module.exports = userRouter
