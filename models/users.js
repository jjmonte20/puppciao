const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    answers: [],
    favoriteDogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "FavoriteDog"
        }
    ]
});

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

// use this to hash the password before the user account is created
UserSchema.pre('save', function(next) {
    let user = this;
    // use language from the libary for salting the password
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    console.log(user);
    // return user.password;
    next();
    });

const User = mongoose.model("User", UserSchema);

module.exports = User;