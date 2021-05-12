const mongoose = require('mongoose')

module.exports = function(app){
    const QuoteSchema = new mongoose.Schema({
        name: String,
        ah_quote: String,
        created_at: {type: Date, default: Date.now},
    },{timestamps:true})
    mongoose.model('Quote',QuoteSchema);
}