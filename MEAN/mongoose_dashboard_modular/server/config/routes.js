const owls = require('../controllers/owls')

module.exports = function(app){

    // render root
    app.get('/', function(req, res) {
        owls.index(req,res)
    })

    //render new owl form
    app.get('/owl/new', function(req, res) {
        owls.new_owl(req,res)
    })

    //process owl add
    app.post('/owl', function(req,res){
        owls.process_new(req,res)
    })

    //render owl details
    app.get('/owl/:id',function(req,res){
        owls.details(req,res)
    })

    //render owl edit
    app.get('/owl/edit/:id', function(req, res) {
        owls.edit(req,res)
    })

    //process owl edit
    app.post('/owl/:id', function(req,res){
        owls.process_edit(req,res)
    })

    //process owl destroy
    app.get('/owl/destroy/:id', function(req,res){
        owls.destroy(req,res)
    })
}