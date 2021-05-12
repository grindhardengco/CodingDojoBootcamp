const express = require("express");
var path = require("path");
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static(path.join(__dirname, "./static")));
mongoose.connect('mongodb://localhost/dojo_quotes',{useNewUrlParser:true});
//change the name of the db & Schema!!!
const QuoteSchema = new mongoose.Schema({
    name: String,
    ah_quote: String,
    created_at: {type: Date, default: Date.now},
})
const Quote = mongoose.model('Quote', QuoteSchema)

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});
