const apis = require('../controllers/apis')

//looks to modularized controllers/logic;  note pluralized spelling
module.exports = function(app){
    
    // render all tasks
    app.get('/', (req,res)=> {
//        apis.index(req,res)
        //root route should do nothing
    })

    app.get('/tasks', (req,res)=>{
        apis.index(req,res)
    })

    // render single task by id
    app.get('/:id', (req,res)=> {
        apis.single(req,res)
    })

    // create a task
    app.get('/new/:title/:descr', (req,res)=> {
        apis.new(req,res)
    })

    // update a task by id
    app.get('/update/:id/:completed', (req,res)=> {
        apis.update(req,res)
    })

    // delete a task by id
    app.get('/delete/:id', (req,res)=> {
        apis.delete(req,res)
    })
    
}