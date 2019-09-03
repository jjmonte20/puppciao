const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema ({
    name: {
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

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;