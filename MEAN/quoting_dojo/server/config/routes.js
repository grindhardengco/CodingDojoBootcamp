const quotes = require('../controllers/quotes')

const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')
module.exports = function(app){
    
    // root route to render view for adding a quote
    app.get('/', function(req, res) {
            quotes.index(req,res);
       })
       
       //route for adding a quote after posting
       app.post('/add_quote', function(req,res){
            quotes.add_quote(req,res);
        })
       
       // route for rendering all quotes, after adding one
       app.get('/quotes', function(req, res) {
            quotes.view_quotes(req,res);
        })
       
 
}