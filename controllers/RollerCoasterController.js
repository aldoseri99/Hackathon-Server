const { RollerCoaster } = require("../models")

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
    const rollerCoaster = await RollerCoaster.create({ ...req.body })
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
}
