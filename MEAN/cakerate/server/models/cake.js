const mongoose = require('mongoose')

const RateSchema = new mongoose.Schema({
    stars: {type: Number, required: true},
    comment: {type: String, required: true},
},{timestamps: true})

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, minlength: 1},
    url: {type: String,required: true, minlength: 1},
    ratings: [RateSchema],
}, {timestamps: true});

Rating = mongoose.model('Rating',RateSchema)
Cake = mongoose.model('Cake',CakeSchema)

module.exports = {
    Rating,
    Cake

}