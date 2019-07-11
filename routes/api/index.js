const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const loginRoutes = require("./login");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/log", loginRoutes);


module.exports = router;
