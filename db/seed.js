const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')
const { ROLES } = require('../utils/constants')

const addDefaultAdmin = async () => {
  return await User.create({
    email: process.env.DEFAULT_ADMIN_EMAIL,
    password: process.env.DEFAULT_ADMIN_PASSWORD,
    role: ROLES.ADMIN,
    name: 'Default Administrator',
  })
}

const initializeFacilities = async () => {}

const seedDatabase = catchAsync(async (req, res, next) => {
  await addDefaultAdmin()

  res
    .status(200)
    .json({ status: 'success', message: 'Database seeded successfully!' })
})

module.exports = seedDatabase
