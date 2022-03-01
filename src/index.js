const express = require('express')
const routes = require('./routes/clients.routes.js')
const dotenv = require('dotenv')
const connectDB = require('./db/db')

dotenv.config()
const port = process.env.PORT ? process.env.PORT : 4000
const db = process.env.ATLAS_URI ? process.env.DB : process.env.ATLAS_URI
const app = express()

app.get('/', routes())

const main = async () => {
  await app.listen(port)
  console.log(`Server http://localhost:${port}`)
  await connectDB(db)
}

main()
