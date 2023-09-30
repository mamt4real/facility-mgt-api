/**
 * Confirm the Environment the applicatiois running
 */
const isDevEnv = process.env.NODE_ENV == 'development'

const ROLES = Object.freeze({
  ADMIN: 'admin',
  USER: 'user',
})

/**
 * Categories of Resources in a Rooms
 */
const ResourceCategory = Object.freeze({
  FURNITURE: 'furniture',
  ELECTRONICS: 'electronics',
  FITTINGS: 'fittings',
  OTHERS: 'others',
})

/**
 * Categories of Facilities
 */

const FacilityCategory = Object.freeze({
  CLASS: 'class',
  OFFICE: 'office',
  LAB: 'lab',
  CONFERENCE_ROOMS: 'conference_rooms',
  TOILET: 'toilet',
  STORE: 'store',
  OTHERS: 'others',
})

module.exports = {
  isDevEnv,
  ROLES,
  ResourceCategory,
  FacilityCategory,
}
