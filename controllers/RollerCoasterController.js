const { RollerCoaster } = require("../models")
const multer = require("multer")
const path = require("path")

let filename
// Set up multer storage (as shown previously)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/")
  },
  filename: (req, file, cb) => {
    filename = "test"
    cb(null, Date.now() + file.originalname)
  },
})

// Initialize multer
upload = multer({ storage: storage })

const GetRollerCoaster = async (req, res) => {
  try {
    const rollerCoaster = await RollerCoaster.find({})
    res.send(rollerCoaster)
  } catch (error) {
    throw error
  }
}

const CreateRollerCoaster = async (req, res) => {
  try {
    const { name, location, speed, description, rating, type, manufacturer } =
      req.body
    const image = req.file ? req.file.filename : null

    const rollerCoaster = await RollerCoaster.create({
      name,
      location,
      speed,
      description,
      rating,
      type,
      manufacturer,
      image,
    })
    res.send(rollerCoaster)
  } catch (error) {
    throw error
  }
}


const DeleteRollerCoaster = async (req, res) => {
  try {
    await RollerCoaster.deleteOne({ _id: req.params.rollerCoaster_id })
    res.send({
      msg: "Roller Coaster Deleted",
      payload: req.params.rollerCoaster_id,
      status: "Ok",
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRollerCoaster,
  CreateRollerCoaster,
  DeleteRollerCoaster,
  upload,
}
