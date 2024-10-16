const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const RollerCoasterSchema = new Schema(
  {
    name: { type: String },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location'
    },
    speed: { type: Number },
    description: { type: String },
    image: { type: String },
    rating: { type: Number },
    type: { type: String },
    manufacturer: { type: String }
  },
  {
    timestamps: true
  }
)

module.exports = RollerCoasterSchema
