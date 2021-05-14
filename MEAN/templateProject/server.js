const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const bcrypt = required('bcrypt');

app.use(express.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static(__dirname + "/static"));
app.use(flash());
mongoose.connect('mongodb://localhost/whatev_name_of_db',{useNewUrlParser:true});

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')
require('./server/models/whatev.js')(app)
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});