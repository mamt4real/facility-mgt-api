const mongoose = require('mongoose')
const { ResourceCategory } = require('../utils/constants')

const resourceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'resource category is required'],
      enum: {
        values: Object.values(ResourceCategory),
        message: `category should be one of (${Object.values(
          ResourceCategory
        ).join(', ')})`,
      },
    },
    name: {
      type: String,
      required: [true, 'resource name is required'],
    },
    description: String,
    image: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const Resource = mongoose.model('Resource', resourceSchema)
module.exports = Resource
