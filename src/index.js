const express = require('express')
const routes = require('./routes')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT ? process.env.PORT : 4000
const app = express()

app.get('/', routes())

const main = async () => {
  await app.listen(port)
  console.log(`Server http://localhost:${port}`)
}

main()
