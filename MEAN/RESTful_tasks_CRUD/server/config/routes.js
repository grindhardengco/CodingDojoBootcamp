const tasks = require('../controllers/tasks')

//looks to modularized controllers/logic;  note pluralized spelling
module.exports = function(app){
    
    // root route to render
    app.get('/list', (req, res)=>{
        tasks.listAll(req,res)
    })

    //route for adding new taks to db from post
    app.post('/newTask', (req,res)=>{
        tasks.newTask(req,res)
    })

    //delete selected task
    app.get('/destroy/:id',(req,res)=>{
        tasks.delete(req,res)
    })

    //render edit 
    app.get('/edit/:id', (req, res)=>{
        tasks.edit(req,res)
    })

    //process edit
    app.post('/process_edit/:id', (req,res)=>{
        tasks.process_edit(req,res)
    });

}