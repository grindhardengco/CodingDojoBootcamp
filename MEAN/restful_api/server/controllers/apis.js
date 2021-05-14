const mongoose = require('mongoose'),
    Api = mongoose.model('Api')

module.exports = {
    
    index: function(req, res) {
        Api.find()
            .then(function(api_data){
                res.json(api_data);
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('error(s) displaying all tasks: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },

    single: function(req, res) {
        Api.findOne({_id:req.params.id})
            .then(function(api_data){
                res.json(api_data);
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('error(s) displaying single task: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },

    new: function(req, res) {
        Api.create({title: req.params.title, descr: req.params.descr})
            .then(function(api_data){
                res.redirect('/');
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('error(s) creating a task: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },

    update: function(req, res) {
        Api.findOneAndUpdate({_id:req.params.id},{$set: {completed: req.params.completed}})
            .then(function(api_data){
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('error(s) displaying single task: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },

    delete: function(req, res) {
        Api.deleteOne({_id:req.params.id})
            .then(function(api_data){
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('error(s) displaying single task: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },
}