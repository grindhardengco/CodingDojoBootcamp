const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static(__dirname + "/static"));
mongoose.connect('mongodb://localhost/owls',{useNewUrlParser:true});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//db
const OwlSchema = new mongoose.Schema({
    name: String,
    height: Number,
    location: String,
    diet: String,
    created_at: {type: Date, default: Date.now},
})
const Owl = mongoose.model('Owl',OwlSchema)


// render root
app.get('/', function(req, res) {
    Owl.find()
        .then(function(owldata){
            res.render("index",{owls:owldata});
        })
        .catch(function(err){
            console.log('****errors: ',err)
        })
})

//render new owl form
app.get('/owl/new', function(req, res) {
    res.render("new");
})

//process owl add
app.post('/owl', function(req,res){
    //create document from post 
    var owl = new Owl();
    owl.name = req.body.name
    owl.height = req.body.height
    owl.location = req.body.location
    owl.diet = req.body.diet
    owl.save()
        .then(function(owldata){
            console.log('****owl added: ',owldata)
            res.redirect('/');
        })
        .catch(function(err){
            console.log('****errors: ',err);
        })
})

//render owl details
app.get('/owl/:id',function(req,res){
    Owl.find({_id:req.params.id})
        .then(function(owldata){
            res.render('detail',{owl:owldata[0]});
        })
        .catch(function(err){
            console.log('****errors: ',err)
        })
})

//render owl edit
app.get('/owl/edit/:id', function(req, res) {
    Owl.find({_id:req.params.id})
        .then(function(owldata){
            res.render('edit',{owl:owldata[0]});
        })
        .catch(function(err){
            console.log('****errors: ',err)
        })
})

//process owl edit
app.post('/owl/:id', function(req,res){
    //update document from post 
    console.log('*******************');
    console.log(Owl.find({_id:req.params.id}));
    Owl.updateOne({_id:req.params.id},{$set:{
        name: req.body.name,
        height: req.body.height,
        location: req.body.location,
        diet: req.body.diet,
    }})
        .then(function(owldata){
            console.log('****owl updated: ',owldata[0])
            res.redirect(`/owl/${req.params.id}`);
        })
        .catch(function(err){
            console.log('****errors: ',err)
        })
})

//process owl destroy
app.get('/owl/destroy/:id', function(req,res){
    //destroy owl document from collection
    Owl.deleteOne({_id:req.params.id})
        .then(function(owldata){
            console.log('****owl deleted: ',owldata[0])
            res.redirect('/');
        })
        .catch(function(err){
            console.log('****errors: ',err)
        })
})

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});
