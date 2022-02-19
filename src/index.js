const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT ? process.env.PORT : 4000
const app = express()

app.get('/', (req, res) => {
  res.send('index')
})

const main = async () => {
  app.listen(port)
  console.log(`Server http://localhost:${port}`)
}

main()
