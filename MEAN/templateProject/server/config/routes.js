const whatevs = require('../controllers/whatevs')

//looks to modularized controllers/logic;  note pluralized spelling
module.exports = function(app){
    
    // root route to render
    app.get('/', (req,res)=>{
        whatevs.index(req,res)
    })

    // route for putting user (could be anything) post data into session
    app.post('/process_user', (req,res)=>{
        whatevs.post_to_session(req,res)
    })

    //render session data (if not private/sensitive!)
    app.get('/aroutetodisplaysomething', (req,res)=>{
        whatevs.render_session(req,res)
    })

    //route for adding data to db from post
    app.post('/arouteforprocessingdata', (req,res)=>{
        whatevs.post_to_db(req,res)
    })

    // route for rendering db data
    app.get('/thatssomeroute', (req,res)=>{
        whatevs.render_db(req,res)
    })

    //render edit 
    app.get('/whatev/edit/:id', (req,res)=>{
        whatevs.render_edit(req,res)
    })

    //process edit
    app.post('/whatev/:id', (req,res)=>{
        whatevs.process_edit(req,res)
    });

}