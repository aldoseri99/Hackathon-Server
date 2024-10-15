const router = require("express").Router()
const controller = require("../controllers/RollerCoasterController")

router.get("/", controller.GetRollerCoaster)
router.post("/", controller.CreateRollerCoaster)

router.delete("/:rollerCoaster_id", controller.DeleteRollerCoaster)

module.exports = router
