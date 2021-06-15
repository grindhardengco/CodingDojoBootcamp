const authors = require('../controllers/authors')

module.exports = function(app){
    
    // root route to render
    app.get('/', (req,res)=>{
    })

    app.post('/addAuthor',(req,res)=>{
        authors.addAuthor(req,res)
    })

    app.get('/listAuthors',(req,res)=>{
        authors.listAuthors(req,res)
    })

    app.get('/fetchAuthor/:id',(req,res)=>{
        authors.fetchAuthor(req,res)
    })

    app.post('/updateAuthor/:id',(req,res)=>{
        authors.updateAuthor(req,res)
    })

    app.get('/listQuotes',(req,res)=>{
        authors.listQuotes(req,res)
    })
    
    app.post('/addQuote/:id',(req,res)=>{
        authors.addQuote(req,res)
    })

    app.post('/updateVote/:id/:val', (req,res)=>{
        authors.updateVote(req,res)
    })

    app.get('/deleteQuote/:id/:quoteid', (req,res)=>{
        console.log("route received req.params: ",req.params)
        authors.deleteQuote(req,res)
    })
}