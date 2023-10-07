const Building = require('../models/Building')
const Facility = require('../models/Facility')
const Resource = require('../models/Resource')

const getDashboard = async () => {
  const facilities = await Facility.countDocuments()
  const buildings = await Building.countDocuments()
  const resources = await Resource.countDocuments()
  res.status(200).json({
    buildings,
    facilities,
    resources,
  })
}

module.exports = {
  getDashboard,
}
