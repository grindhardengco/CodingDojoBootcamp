const mongoose = require('mongoose'),
    {Api} = require('../models/api')
    //because of this require I do not need mongoose.js

module.exports = {
    
    index: function(req, res) {
        Api.find()
            .then(function(api_data){
                res.json(api_data);
            })
            .catch(function(err){
                console.log('err:',err);
                res.json(err)
                //use this for other Angular catches
            })
    },

    single: function(req, res) {
        Api.findOne({_id:req.params.id})
            .then(function(api_data){
                res.json(api_data);
            })
            .catch(function(err){
                console.log('err:',err);
                res.json(err)
            })
    },

    new: function(req, res) {
        Api.create({title: req.params.title, descr: req.params.descr})
            .then(function(api_data){
                res.redirect('/');
            })
            .catch(function(err){
                console.log('err:',err);
                res.json(err)
            })
    },

    update: function(req, res) {
        Api.findOneAndUpdate({_id:req.params.id},{$set: {completed: req.params.completed}})
            .then(function(api_data){
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                res.json(err)
            })
    },

    delete: function(req, res) {
        Api.deleteOne({_id:req.params.id})
            .then(function(api_data){
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                res.json(err)
            })
    },
}