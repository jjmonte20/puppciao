const router = require("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("/")
    .post(userController.createUser)

module.exports = router;