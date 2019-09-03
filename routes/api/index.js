const router = require("express").Router();
const userRoutes = require("./users");
const loginRoutes = require("./login");

// PuppyCiao routes
router.use("/users", userRoutes);
router.use("/log", loginRoutes);


module.exports = router;
