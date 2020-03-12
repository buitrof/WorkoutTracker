const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  Workout.find()
  .then(workouts => res.json(workouts))
  .catch(e => console.error(e))
})

module.exports=router