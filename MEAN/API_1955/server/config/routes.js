const apis = require('../controllers/apis')

//looks to modularized controllers/logic;  note pluralized spelling
module.exports = function(app){
    
    // root route to render json data for documents
    app.get('/', function(req, res) {
        apis.index(req,res)
    })

    //route for adding new person to db
    app.get('/new/:name', function(req,res){
        apis.new(req,res)
    })

    //route for removing a person
    app.get('/remove/:name', function(req,res){
        apis.remove(req,res)
    })
    
    //route for viewing one name
    app.get('/:name', function(req,res){
        apis.person(req,res)
    })
}