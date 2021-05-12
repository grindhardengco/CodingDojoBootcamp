const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    name: String,
    ah_quote: String,
    created_at: {type: Date, default: Date.now},
})
const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = {
    Quote:Quote,
    QuoteSchema:QuoteSchema,
}