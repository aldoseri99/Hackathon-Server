const express = require('express')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const indexRouter = require('./routes/indexRouter')
const AuthRouter = require('./routes/AuthRouter')
app.use('/', indexRouter)
app.use('/auth', AuthRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
