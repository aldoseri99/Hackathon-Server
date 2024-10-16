const mongoose = require('mongoose')
const userSchema = require('./User')
const RollerCoasterSchema = require('./RollerCoaster')
const LocationSchema = require('./Location')

const User = mongoose.model('User', userSchema)
const RollerCoaster = mongoose.model('RollerCoaster', RollerCoasterSchema)
const Location = mongoose.model('Location', LocationSchema)

module.exports = {
  User,
  RollerCoaster,
  Location
}
