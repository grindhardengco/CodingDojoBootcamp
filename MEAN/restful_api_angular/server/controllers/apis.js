const mongoose = require('mongoose'),
    {Api} = require('../models/api')
    //because of this require I do not need mongoose.js

module.exports = {
    
    index: function(req, res) {
        Api.find()
            .then(api_data=>{
                res.json(api_data);
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
                //use this for other Angular catches
            })
    },

    single: (req, res) => {
        Api.findOne({_id:req.params.id})
            .then(api_data=>{
                res.json(api_data);
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
            })
    },

    new: (req, res)=> {
        Api.create({title: req.params.title, descr: req.params.descr})
            .then(api_data=>{
                res.redirect('/');
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
            })
    },

    update: (req, res)=> {
        Api.findOneAndUpdate({_id:req.params.id},{$set: {completed: req.params.completed}})
            .then(api_data=>{
                res.redirect('/')
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
            })
    },

    delete: (req, res)=> {
        Api.deleteOne({_id:req.params.id})
            .then(api_data=>{
                res.redirect('/')
            })
            .catch(err=>{
                console.log('err:',err);
                res.json(err)
            })
    },
}