const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/restfulApi/dist/restfulApi"));
mongoose.connect('mongodb://localhost/restful_api',{useNewUrlParser:true});

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});