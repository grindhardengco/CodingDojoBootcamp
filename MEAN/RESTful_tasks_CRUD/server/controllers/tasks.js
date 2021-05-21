const mongoose = require('mongoose'),
    Task = mongoose.model('Task')

module.exports = {
    
    // index: function(req, res) {
    // },

    newTask: (req,res)=>{
        var newTask = new Task();
        newTask.title = req.body.title;
        newTask.description = req.body.description;
        newTask.save()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
            })
    },

    listAll: (req,res)=> {
        Task.find()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log(err);
                res.json(err)
            })
    },

    delete: (req,res)=>{
        Task.deleteOne({_id: req.params.id})
            .then(data=>{
                console.log("***task destroyed***")
                res.json(data)
            })
            .catch(err=>{
                console.log(err)
                res.json(err)
            })
    },

    edit: (req, res)=>{
        Task.find({_id:req.params.id})
            .then(data=>{
                res.json(data[0]);
            })
            .catch(err=>{
                console.log('****edit errors: ',err)
                res.json(err)
            })
    },

    process_edit: (req,res)=>{
        //update document from post 
        Task.updateOne({_id:req.params.id},{$set:{
            title: req.body.title,
            description: req.body.description,
        }})
            .then(data=>{
                console.log("promise data: ",data)
                res.json(data);
            })
            .catch(err=>{
                console.log('****errors: ',err)
                res.json(err)
            })
    },

}