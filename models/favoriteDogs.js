const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteDogSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    favoriteduID: {
        type: String,
        required: true
    },
    favoriteduName: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        required: true
    },
    shelterName: {
        type: String,
        required: true
    },
    shelterAddr: {
        type: String,
        required: true
    },
    shelterEmail: {
        type: String,
        required: true
    },
    shelterNumber: {
        type: Number,
        required: true
    },
    isAdopted: {
        type: Boolean,
        required: true
    },
    answers: []
});

const FavoriteDog = mongoose.model("FavoriteDog", FavoriteDogSchema);

module.exports = FavoriteDog;