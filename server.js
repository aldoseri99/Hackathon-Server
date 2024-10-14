const express = require('express')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

const indexRouter = require('./routes/indexRouter')
app.use('/', indexRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
