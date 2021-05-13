const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
mongoose.connect('mongodb://localhost/owls',{useNewUrlParser:true});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')

require('./server/models/owl.js')(app);

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});
