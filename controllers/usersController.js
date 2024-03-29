const db = require('../models');

module.exports = {
    createUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findMe: function(req, res) {
        db.User
            .findOne(req.user._id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}