const { model, Schema } = require('mongoose')

module.exports = model('workout', new Schema({
  day: Date,
  exercises: [{
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
  }]
}))