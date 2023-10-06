const Building = require('../models/Building')
const Facility = require('../models/Facility')
const Resource = require('../models/Resource')
const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')
const {
  ROLES,
  ResourceCategory,
  FacilityCategory,
} = require('../utils/constants')

const clearDb = async () => {
  await Building.deleteMany()
  await Facility.deleteMany()
  await Resource.deleteMany()
}

const addDefaultAdmin = async () => {
  return await User.updateOne(
    {
      email: process.env.DEFAULT_ADMIN_EMAIL,
      password: process.env.DEFAULT_ADMIN_PASSWORD,
      role: ROLES.ADMIN,
      name: 'Default Administrator',
    },
    {
      email: process.env.DEFAULT_ADMIN_EMAIL,
      password: process.env.DEFAULT_ADMIN_PASSWORD,
      role: ROLES.ADMIN,
      name: 'Default Administrator',
    },
    { upsert: true }
  )
}

const addDefaultBuildings = async (createdBy) => {
  const buildings = [
    {
      name: 'Class Building',
      location: 'SITE II Computer Science compound',
      description: 'Building With Lecture Classes',
      image: 'building-1.jpg',
      createdBy,
    },
    {
      name: 'Office Building',
      location: 'SITE II Computer Science compound',
      description: 'Officers Complex',
      image: 'building-1.jpg',
      createdBy,
    },
    {
      name: 'H.O.D Building',
      location: 'SITE II Computer Science compound',
      description: 'HOD and Labs Complex',
      image: 'building-1.jpg',
      createdBy,
    },
  ]
  return await Building.create(buildings)
}

const addDefaultResources = async () => {
  const resources = [
    {
      category: ResourceCategory.ELECTRONICS,
      name: '3-blade Ceiling Fan',
      description: 'A three blade ceiling fan',
      image: 'fan.jpg',
    },
    {
      category: ResourceCategory.ELECTRONICS,
      name: 'Ceiling Bulb',
      description: 'Circular florescent ceiling bulbs',
      image: 'ceiling-bulb.jpg',
    },
    {
      category: ResourceCategory.ELECTRONICS,
      name: 'Projector',
      description: 'A smart projector',
      image: 'projector.jpg',
    },
    {
      category: ResourceCategory.ELECTRONICS,
      name: 'Smart Board',
      description: 'A smart board for projection',
      image: 'smart-board.jpg',
    },
    {
      category: ResourceCategory.ELECTRONICS,
      name: 'Inverter',
      description: 'A 120 watt inverter',
      image: 'projector.jpg',
    },
    {
      category: ResourceCategory.FITTINGS,
      name: 'White Board',
      description: 'A white board for non-permanet marker writings',
      image: 'white-board.jpg',
    },
    {
      category: ResourceCategory.FITTINGS,
      name: 'Fire Alarm Endpoint',
      description: 'A button to',
      image: 'white-board.jpg',
    },
    {
      category: ResourceCategory.FITTINGS,
      name: 'Curtains',
      description: 'A Long window curtains',
      image: 'curtain.jpg',
    },
    {
      category: ResourceCategory.FURNITURE,
      name: '5-seater long seat',
      description: 'A wooden+metallic five seater long chair',
      image: 'long-seat.jpg',
    },
    {
      category: ResourceCategory.FURNITURE,
      name: 'Standing Podium',
      description: 'A wooden podium for lecturers laptop and or books support',
      image: 'podium.jpg',
    },
    {
      category: ResourceCategory.FURNITURE,
      name: 'Office Table',
      description: 'A wooden office Table',
      image: 'office-table.jpg',
    },
  ]

  return await Resource.create(resources)
}

const initializeFacilities = async () => {
  const admin = await User.findOne()
  const buildings = await addDefaultBuildings()
  const classBuilding = buildings.find((b) => b.name === 'Class Building')
  const resources = await addDefaultResources()
  const classes = [
    {
      building: classBuilding?._id,
      category: FacilityCategory.CLASS,
      name: 'LH4',
      image: 'lh4.jpg',
      createdBy: admin._id,
      resources: [
        {
          resource: resources[0]._id,
          quantity: 6,
        },
        {
          resource: resources[1]._id,
          quantity: 10,
        },

        {
          resource: resources[2]._id,
          quantity: 1,
        },
        {
          resource: resources[3]._id,
          quantity: 1,
        },
        {
          resource: resources[4]._id,
          quantity: 1,
        },
        {
          resource: resources[5]._id,
          quantity: 1,
        },
        {
          resource: resources[6]._id,
          quantity: 2,
        },
        {
          resource: resources[7]._id,
          quantity: 8,
        },
        {
          resource: resources[8]._id,
          quantity: 40,
        },
        {
          resource: resources[9]._id,
          quantity: 1,
        },
        {
          resource: resources[10]._id,
          quantity: 1,
        },
      ],
    },
    {
      building: classBuilding?._id,
      category: FacilityCategory.CLASS,
      name: 'LH1',
      image: 'lh1.jpg',
      createdBy: admin._id,
      resources: [
        {
          resource: resources[0]._id,
          quantity: 6,
        },
        {
          resource: resources[1]._id,
          quantity: 10,
        },

        {
          resource: resources[2]._id,
          quantity: 1,
        },
        {
          resource: resources[3]._id,
          quantity: 1,
        },
        {
          resource: resources[4]._id,
          quantity: 1,
        },
        {
          resource: resources[5]._id,
          quantity: 1,
        },
        {
          resource: resources[6]._id,
          quantity: 2,
        },
        {
          resource: resources[7]._id,
          quantity: 8,
        },
        {
          resource: resources[8]._id,
          quantity: 40,
        },
        {
          resource: resources[9]._id,
          quantity: 1,
        },
        {
          resource: resources[10]._id,
          quantity: 1,
        },
      ],
    },
  ]
  const toilets = [
    {
      building: classBuilding?._id,
      category: FacilityCategory.TOILET,
      name: 'Male Toilet One',
      image: 't1.jpg',
      createdBy: admin._id,
    },
    {
      building: classBuilding?._id,
      category: FacilityCategory.TOILET,
      name: 'Male Toilet Two',
      image: 't2.jpg',
      createdBy: admin._id,
    },
  ]

  return await Facility.create([...classes, ...toilets])
}

const seedDatabase = catchAsync(async (req, res, next) => {
  await initializeFacilities()
  res
    .status(200)
    .json({ status: 'success', message: 'Database seeded successfully!' })
})

// clearDb().then(console.log)

module.exports = seedDatabase
