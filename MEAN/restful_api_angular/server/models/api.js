const mongoose = require('mongoose')

const ApiSchema = new mongoose.Schema({
    title: {type:String, required: true},
    descr: {type: String, required: true, default: ''},
    completed: {type: Boolean, default: false},
}, {timestamps: true});
Api = mongoose.model('Api',ApiSchema)
module.exports = {
    Api: Api,
    // ApiSchema: ApiSchema,
    //I don't have to export the Schema unless I am exporting multiple models, which would be done in separate files.
}