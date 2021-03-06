const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dojo_quotes',{useNewUrlParser:true});

app.use(express.urlencoded({ extended: true }));
app.use(express.static((__dirname + "/static")));

app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

//looks to modularized routes
require('./server/config/mongoose.js')

require('./server/models/quote')(app);

require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});