const BadRequest = require('../errors/badRequest')
const NotFound = require('../errors/not-found')
const Facility = require('../models/Facility')
const Resource = require('../models/Resource')
const catchAsync = require('../utils/catchAsync')
const factory = require('../utils/handlerFactory')

const addResourceToFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.findById(req.params.facilityID)
  if (!facility)
    return next(new NotFound('No facility with ID: ' + req.params.facilityID))

  const { resource, quantity } = req.body
  if (!resource || !quantity)
    return next(new BadRequest('resource and quantity fields are required'))

  const resourceDoc = await Resource.findById(resource)
  if (!resourceDoc)
    return next(new NotFound('No resource found with id: ' + resource))

  // Depopulate resources
  facility.depopulate()
  const alreadyHas = facility.resources.find(
    (r) => r.resource.toString() === resource.toString()
  )

  if (alreadyHas) {
    alreadyHas.quantity += quantity
  } else {
    facility.resources.push({
      resource,
      quantity,
    })
  }

  await facility.save()
  await facility.populate('resources.resource')
  res.status(200).json({
    status: 'success',
    message: 'resource added successfully',
    data: facility,
  })
})

const removeResourceFromFacility = catchAsync(async (req, res, next) => {
  const facility = await Facility.findById(req.params.facilityID)
  if (!facility)
    return next(new NotFound('No facility with ID: ' + req.params.facilityID))

  // Depopulate resources
  facility.depopulate()
  const position = facility.resources.findIndex(
    (r) => r.resource.toString() === req.params.resourceID.toString()
  )
  if (position >= 0) facility.resources.splice(position, 1)
  await facility.save()

  res.status(204).send()
})

const getFacilityResources = catchAsync(async (req, res, next) => {
  const facility = await Facility.findById(req.params.facilityID)
  if (!facility)
    return next(new NotFound('No facility with ID: ' + req.params.facilityID))

  res.status(200).json({
    status: 'success',
    message: 'resources retrieved successfully',
    data: facility.resources,
  })
})

const updateFacilityResource = catchAsync(async (req, res, next) => {
  const facility = await Facility.findById(req.params.facilityID)
  if (!facility)
    return next(new NotFound('No facility with ID: ' + req.params.facilityID))

  const { quantity, notWorking } = req.body
  // Depopulate resources
  facility.depopulate()
  const resource = facility.resources.find(
    (r) => r.resource.toString() === req.params.resourceID.toString()
  )
  if (resource) {
    quantity &&
      (resource.quantity = quantity)(!isNaN(Number(notWorking))) &&
      (resource.notWorking = notWorking)
  } else {
    return next(
      new NotFound(
        `The facility ${facility.name} has no resource with id: ${req.params.resourceID}`
      )
    )
  }
  await facility.save()
  await facility.populate('resources.resource')

  res.status(200).json({
    status: 'success',
    message: 'facility resource updated successfully',
    data: facility,
  })
})

const createFacility = factory.createOne(Facility)
const getAllFacilities = factory.getAll(Facility)
const getFacility = factory.getOne(Facility)
const updateFacility = factory.updateOne(Facility)
const deleteFacility = factory.deleteOne(Facility)

module.exports = {
  createFacility,
  getAllFacilities,
  getFacility,
  updateFacility,
  deleteFacility,
  addResourceToFacility,
  removeResourceFromFacility,
  updateFacilityResource,
  getFacilityResources,
}
