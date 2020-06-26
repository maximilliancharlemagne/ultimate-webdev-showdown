require('dotenv').config()

const express = require('express')
const app = express()
const server = require('html')(app)
const path = require('path')

express.static(path.join(__dirname,'client','build'))

server.listen(process.env.PORT, () => {
  console.log(`http://localhost${process.env.PORT}`)
})