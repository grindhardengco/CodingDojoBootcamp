const mongoose = require('mongoose')

module.exports = function(app){
    const ApiSchema = new mongoose.Schema({
        title: {type:String, required: true},
        descr: {type: String, required: true, default: ''},
        completed: {type: Boolean, default: false},
    }, {timestamps: true});
    mongoose.model('Api',ApiSchema)
}