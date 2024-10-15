const mongoose = require("mongoose")
const userSchema = require("./User")
const RollerCoasterSchema = require("./RollerCoaster")

const User = mongoose.model("User", userSchema)
const RollerCoaster = mongoose.model("RollerCoaster", RollerCoasterSchema)

module.exports = {
  User,
  RollerCoaster,
}
