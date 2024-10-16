const { Schema } = require('mongoose')

const LocationSchema = new Schema(
  {
    park: { type: String },
    country: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = LocationSchema
