const mongoose = require('mongoose')
const { isDevEnv } = require('../utils/constants')
mongoose.set('strictQuery', false)

const connnectDb = async () => {
  const { mongo_URI, local_mongo, NODE_ENV } = process.env

  const connUrl = NODE_ENV === 'development' ? local_mongo : mongo_URI

  const conn = await mongoose.connect(connUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log(`Connected to database on ${conn.connection.host}`)
  conn.connection.on('error', console.error.bind(console, 'connection error: '))
  conn.connection.once('disconnected', function (conn) {
    console.log(`Disconnected from database at ${new Date()}`)
  })
}

module.exports = connnectDb
