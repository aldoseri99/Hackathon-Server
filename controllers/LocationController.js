const { Location } = require('../models')

const GetLocation = async (req, res) => {
  try {
    const location = await Location.find({})
    res.send(location)
  } catch (error) {
    throw error
  }
}

const CreateLocation = async (req, res) => {
  try {
    const { park, country } = req.body

    const location = await Location.create({ park, country })
    res.send(location)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateLocation,
  GetLocation
}
