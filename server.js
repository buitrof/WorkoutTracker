const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.render('./public', {
  })
})

mongoose.connect('mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3000))
  .catch(e => console.error(e))
