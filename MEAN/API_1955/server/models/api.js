const mongoose = require('mongoose')

module.exports = function(app){
    const ApiSchema = new mongoose.Schema({
        name: {type:String, required: true, minlength: 1},
    }, {timestamps: true});
    mongoose.model('Api',ApiSchema)
}