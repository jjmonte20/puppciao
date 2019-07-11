const router = require("express").Router();
const passport = require("../../config/passport");

router
    .route("/")
    .post(passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    })
    .get(function(req, res) {
        req.logout();
        res.send("You've logged out");
    })

module.exports = router;