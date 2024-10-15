const { Schema } = require("mongoose")

const RollerCoasterSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    speed: { type: Number },
    description: { type: String },
    image: { type: String },
    rating: { type: Number },
    type: { type: String },
    manufacturer: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = RollerCoasterSchema
