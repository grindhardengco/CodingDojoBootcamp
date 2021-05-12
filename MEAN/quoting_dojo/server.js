const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static((__dirname + "/static")));
mongoose.connect('mongodb://localhost/dojo_quotes',{useNewUrlParser:true});

const {Quote} = require('./server/models/quote.js')

app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

//looks to modularized routes
require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});
