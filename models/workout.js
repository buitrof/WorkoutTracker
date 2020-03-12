const mongoose = require('mongoose')

const Workout = mongoose.model('workout', new mongoose.Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
}))

module.exports = Workout