const mongoose = require('mongoose')
const { FacilityCategory } = require('../utils/constants')

const facilitySchema = new mongoose.Schema(
  {
    building: {
      type: mongoose.Schema.ObjectId,
      ref: 'Building',
      required: [true, 'A facility must belong to a building'],
    },
    category: {
      type: String,
      required: [true, 'facility category is required'],
      enum: {
        values: Object.values(FacilityCategory),
        message: `category should be one of (${Object.values(
          FacilityCategory
        ).join(', ')})`,
      },
    },
    name: {
      type: String,
      required: [true, 'facility name is required'],
    },
    description: String,
    image: String,
    resources: [
      {
        resource: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Resource',
          required: [true, 'resource id is required'],
        },
        quantity: {
          type: Number,
          required: [true, 'quantity of the resource is required'],
        },
        notWorking: { type: Number, default: 0 },
      },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

/**
 * Hooks
 */

// Populate The resource
facilitySchema.pre(/^find/, function (next) {
  this.populate('resources.resource', '-createdAt -updatedAt')
  next()
})

const Facility = mongoose.model('Facility', facilitySchema)
module.exports = Facility
