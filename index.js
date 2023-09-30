const app = require('./app')
const connnectDb = require('./db')
require('dotenv').config()

// Start App
const PORT = process.env.PORT || 5002
app.listen(PORT, () => {
  console.log('Server Listening On Port: ' + PORT)
})

// Connect Database
connnectDb()
