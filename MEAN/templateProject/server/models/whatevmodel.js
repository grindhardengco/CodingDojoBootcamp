const mongoose = require('mongoose')

const Whatev2Schema = new mongoose.Schema({
    whatevkey1: {type:String, required: true, minlength: 50},
    whatevkey2: {type: Number, min: 1, max:150},
    email: {type: String, required: true},
}, {timestamps: true});

const WhatevSchema = new mongoose.Schema({
    whatevkey1: {type:String, required: [true, 'whatev must be longer than 49 characters.'], minlength: 50},
    whatevkey2: {type: Number, min: 1, max:150},
    email: {type: String, required: true},
    whatev2s: [Whatev2Schema],
}, {timestamps: true});

Whatev2 = mongoose.model('Whatev2',Whatev2Schema)
Whatev = mongoose.model('Whatev',WhatevSchema)

module.exports = {
    Whatev,
    Whatev2
    // WhatevSchema: WhatevSchema,
    // only use the above line if multiple models (details? or collections)
}