const express = require('express')
const cors = require('cors')
const fruits = require('./cars.json')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("I am a car")
  })
  
  app.get('/cars', (req, res) => {
    res.send("Hello, cars")
  })
  
  app.get('/cars/:id', (req, res) => {
    res.send(req.query)
  })



module.exports = app;
