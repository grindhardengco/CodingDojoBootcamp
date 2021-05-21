const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {type:String, required: true, minlength: 1},
    description: {type: String, required: true, minlength: 1},
}, {timestamps: true});
Task = mongoose.model('Task',TaskSchema)
module.exports = {
    Task: Task,
}