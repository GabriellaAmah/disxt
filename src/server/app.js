import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.json({ msg: 'Hello Disxt.' })
})

require('../routes')(app)

module.exports = app
