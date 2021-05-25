const cakes = require('../controllers/cakes')

//looks to modularized controllers/logic;  note pluralized spelling
module.exports = function(app){
    
    // root route to render
    app.get('/', (req,res)=>{
    })

    app.post('/create',(req,res)=>{
        cakes.create(req,res)
    })

    app.get('/list',(req,res)=>{
        cakes.showAll(req,res)
    })
    
    app.post('/rate/:id',(req,res)=>{
        cakes.rate(req,res)
    })

    app.get('/details/:id',(req,res)=>{
        cakes.details(req,res)
    })
}