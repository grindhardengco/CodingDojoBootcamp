const mongoose = require('mongoose')

module.exports = function(app){
    const OwlSchema = new mongoose.Schema({
        name: String,
        height: Number,
        location: String,
        diet: String,
    },{timestamps:true})
    mongoose.model('Owl',OwlSchema)
}