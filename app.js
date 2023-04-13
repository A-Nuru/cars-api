const express = require('express')
const cors = require('cors')
const cars = require('./cars.json')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/cars', (req, res) => {
    res.send(cars)
  })
  
app.get('/cars/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    console.log(name)

    const car = cars.find(car => car.name.toLowerCase() === name)
    console.log(car)
    if (car === undefined) {
        res.status(404).send({ error: `car: ${name} not found :(`})
    }
    res.send(car)
})




module.exports = app;
