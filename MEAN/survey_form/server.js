var express = require("express");
var path = require("path");
var session = require("express-session");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret:'whatisIanupto?'}))

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.post('/result', function(req, res) {
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
 
 res.redirect('/results');
})

app.get('/results', function(req,res){
    res.render("results",{
        name:req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment,
    });
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
