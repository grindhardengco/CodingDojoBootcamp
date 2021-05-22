const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json())
mongoose.connect('mongodb://localhost/cakerate_mongoose',{useNewUrlParser:true});

require('./server/config/mongoose.js')
require('./server/models/cake.js')
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});