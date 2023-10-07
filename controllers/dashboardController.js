const Building = require('../models/Building')
const Facility = require('../models/Facility')
const Resource = require('../models/Resource')
const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')

const getDashboard = catchAsync(async (req, res, next) => {
  const facilities = await Facility.countDocuments()
  const buildings = await Building.countDocuments()
  const resources = await Resource.countDocuments()
  const users = await User.countDocuments()
  res.status(200).json({
    status: 'success',
    message: 'stats retrieved successfully',
    data: {
      users,
      buildings,
      facilities,
      resources,
    },
  })
})

module.exports = {
  getDashboard,
}
