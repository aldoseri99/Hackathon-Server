const express = require("express")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const indexRouter = require('./routes/indexRouter')
const AuthRouter = require('./routes/AuthRouter')
const RollerCoasterRouter = require("./routes/RollerCoasterRouter")
app.use('/', indexRouter)
app.use('/auth', AuthRouter)
app.use("/rollerCoaster", RollerCoasterRouter)


app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
