const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Your pet NEEDS a name!"],
        minlength: [3, "pet name must be 3 or more characters!"],
        unique: true
    }, 
    type: {
        type: String, 
        required: [true, "Your pet NEEDS a type!"],
        minlength: [3, "pet type must be 3 or more characters!"]
    },
    desc: {
        type: String, 
        required: [true, "Your pet NEEDS a description!"],
        minlength: [3, "pet description must be 3 or more characters!"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }

},{timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);
PetSchema.plugin(uniqueValidator);

module.exports = Pet;