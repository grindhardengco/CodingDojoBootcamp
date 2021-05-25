const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'Name must have more than 3 characters.'], minlength: 3},
    quote: [{
        text: {type: String, required: true, minlength: 3},
        vote: {type:Number, default: 0},
    }]
}, {timestamps: true});
Author = mongoose.model('Author',AuthorSchema)
module.exports = {
    Author,
}