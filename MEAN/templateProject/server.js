const express = require("express");
var path = require("path");
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static(path.join(__dirname, "./static")));
mongoose.connect('mongodb://localhost/whatev_name_of_db',{useNewUrlParser:true});
//change the name of the db & Schema!!!
const WhatevSchema = new mongoose.Schema({
    whatevkey1: String,
    whatevkey2: Number,
    created_at: {type: Date, default: Date.now},
})
const Whatev = mongoose.model('Whatev',WhatevSchema)

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render
app.get('/', function(req, res) {
    res.render("index");
})

// route for putting user (could be anything) post data into session
app.post('/process_user', function(req, res) {
    // console.log("POST DATA", req.body);
    req.session.whatev = req.body.whatev;
    res.redirect('/aroutetodisplaysomething');
})

//render session data (if not private/sensitive!)
app.get('/aroutetodisplaysomething', function(req,res){
    if(!session.whatev){
        session.whatev="notnowfoo'!"
    }
    res.render("ejsfilename",{
        whatev: req.session.whatev,
        whatev2: req.session.whatev2,
    });
})

//route for adding data to db from post
app.post('/arouteforprocessingdata', function(req,res){
    var whatev = new Whatev();
    whatev.key1 = req.body.form_input_name1;
    whatev.key2 = req.body.form_input_name2;
    whatev.save();
        .then(function (whatevdata){
            console.log('this promise was met and may have code following, especially to redirect', whatevdata);
            res.redirect('/somewhere')
        })
        .catch(function(err){
            console.log('err:',err);
        })
})

// route for rendering db data
app.get('/thatssomeroute', function(req, res) {
    whatev = []
    Quote.find()
        .then(function (whatevdata){
            whatev = whatevdata;
            // console.log(whatev);
            res.render('thatejsfile',{
                key1:whatev.blegh1,
                key2:whatev.blegh2,
                key3:whatev.created_at,
        })
        .catch(function (err){
            console.log(err);
        })
    });
})


app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});
