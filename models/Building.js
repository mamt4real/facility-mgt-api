const mongoose = require('mongoose')
const Facility = require('./Facility')

const buildingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'building name is required'],
      unique: true,
    },
    location: String,
    description: String,
    image: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

/**
 * Virtual Fields
 */

buildingSchema.virtual('facilities', {
  ref: 'Facility',
  localField: '_id',
  foreignField: 'building',
})

/**
 * Hooks
 */

// On delete cascasde facilities
buildingSchema.post('delete', function (doc) {
  Facility.deleteMany({ building: doc._id }).catch(console.error)
})

const Building = mongoose.model('Building', buildingSchema)
module.exports = Building
