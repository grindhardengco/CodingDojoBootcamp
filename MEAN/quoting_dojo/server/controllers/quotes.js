const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')

module.exports = {
    index: function(req,res){
        res.render("index");
    },
    add_quote: function(req,res){
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
    },
    view_quotes: function(req,res){
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
    },
}