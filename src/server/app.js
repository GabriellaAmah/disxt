import express from 'express'
import redis from 'redis'

const client = redis.createClient({
  host: 'redis',
  port: 6379
})

client.set('visits', 0)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  client.get('visits', (err, visits) => {
    if (err) console.log(err)
    res.json({ visits })
    client.set('visits', parseInt(visits) + 1)
  })
})

require('../routes')(app)

module.exports = app
