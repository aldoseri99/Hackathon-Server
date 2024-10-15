const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    profilePic: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = userSchema
