const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/tasks/dist/tasks"));
app.use(express.json())
mongoose.connect('mongodb://localhost/tasks_api',{useNewUrlParser:true});

require('./server/config/mongoose.js');
require('./server/models/task.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});