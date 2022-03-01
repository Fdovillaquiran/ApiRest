const mongoose = require('mongoose')

module.exports = connectDB = async (db) => {
  return await mongoose
    .connect(db)
    .then(() => {
      console.log('Conection BD full')
    })
    .catch((err) => {
      console.log('error', err)
    })
}
