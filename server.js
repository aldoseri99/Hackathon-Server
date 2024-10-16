const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3001

const db = require('./db')
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/indexRouter')
const AuthRouter = require('./routes/AuthRouter')
const RollerCoasterRouter = require('./routes/RollerCoasterRouter')
const LocationRouter = require('./routes/LocationRouter')
app.use('/', indexRouter)
app.use('/auth', AuthRouter)
app.use('/rollerCoaster', RollerCoasterRouter)
app.use('/location', LocationRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
