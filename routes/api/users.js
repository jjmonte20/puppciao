const router = require("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("/")
    .post(userController.createUser)
    .get(userController.findMe)

module.exports = router;