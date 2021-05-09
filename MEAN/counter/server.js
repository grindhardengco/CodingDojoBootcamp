var session = require('express-session');
var express = require("express");

// path module -- try to figure out where and why we use this
var path = require("path");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0;
// root route to render the index.ejs view
app.get('/', function(req, res) {
        count += 1;
    res.render("index",
        {counter:count});
})

//get session data
app.use(session({secret: 'whatisianupto?'}));
app.post('/add2', function(request,response){
    count += parseInt(request.body.add_two);
    response.redirect('/');
})
app.post('/reset', function(request,response){
    if(request){
        count = 0;
    }
    response.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
