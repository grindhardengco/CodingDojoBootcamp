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

// root route to render view for adding a quote
app.get('/', function(req, res) {
 res.render("index");
})

//route for adding a quote after posting
//is supposed to be app.get?? surely not
app.post('/add_quote', function(req,res){
    var quote = new Quote();
    quote.name = req.body.name;
    quote.ah_quote = req.body.ah_quote;
    quote.save()
        .then(function (quotedata){
            console.log('this promise was met and may have code following, especially to redirect', quotedata);
            res.redirect('/quotes')
        })
        .catch(function(err){
            console.log('err:',err);
        })
})

// route for rendering all quotes, after adding one
app.get('/quotes', function(req, res) {
    quote_list = []
    Quote.find()
        .then(function (quotedata){
            quote = quotedata;
            console.log(quote);
            res.render('quotes',{
                names:quote.name,
                quotes:quote.ah_quote,
                dates:quote.created_at,
        })
        .catch(function (err){
            console.log(err);
        })
    });
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});
