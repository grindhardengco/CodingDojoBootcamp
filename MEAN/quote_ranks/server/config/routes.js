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
        console.log("route received req: ", req.body)
        authors.updateAuthor(req,res)
    })
    
    // app.post('/rate/:id',(req,res)=>{
    //     cakes.rate(req,res)
    // })

    // app.get('/details/:id',(req,res)=>{
    //     cakes.details(req,res)
    // })
}