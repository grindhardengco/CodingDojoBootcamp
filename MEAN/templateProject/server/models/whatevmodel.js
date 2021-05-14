const mongoose = require('mongoose')

module.exports = function(app){
    //change the name of the db, Schema, and controller(s)!!!
    const WhatevSchema = new mongoose.Schema({
        whatevkey1: {type:String, required: true, minlength: 50},
        whatevkey2: {type: Number, min: 1, max:150},
        email: {type: String, required: true},
        // created_at: {type: Date, default: Date.now},  this is redundant with timestamps but I wanted to preserve the reference
    }, {timestamps: true});
    mongoose.model('Whatev',WhatevSchema)
}