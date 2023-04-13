const express = require('express')
const cors = require('cors')
const cars = require('./cars.json')
const { capitalise } = require('./helpers')


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


app.post('/cars', (req, res) => {
    console.log("line 39", req.body.name)
    const ids = cars.map(car => car.id)
    let maxId = Math.max(...ids)
    
    // console.log("line 42", maxId)
  
    const car = cars.find(car => car.name === capitalise(req.body.name))
  
    console.log("line 48", car)
  
    if (car !== undefined) {
      res.status(409).send({error: "fruit already exists"})
    } else {
      maxId += 1
      const newCar = req.body
      newCar.id = maxId
  
      cars.push(newCar)
  
      res.status(201).send(newCar)
    }
  
  //   res.status(201).send(newFruit)
  
  })



module.exports = app;
