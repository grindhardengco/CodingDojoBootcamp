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
                req.flash('api display errors: ', err.errors[key].message);
            }
            res.redirect('/')
            })
    },

    new: function(req,res){
        // var whatev = new Whatev();
        Api.create({name: req.params.name})
            .then(function (api_data){
                console.log('****person add success: ', api_data);
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('person add error: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },

    remove: function(req,res){
        Api.deleteOne({name: req.params.name})
            .then(function (api_data){
                console.log('****person remove success: ', api_data);
                res.redirect('/')
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('person remove error: ', err.errors[key].message);
                }
                res.redirect('/')
            })
    },
    
    person: function(req, res) {
        Api.find({name: req.params.name})
            .then(function (api_data){
                res.json(api_data)
            .catch(function (err){
                console.log(err);
                for (var key in err.errors){
                    req.flash('person data errors: ', err.errors[key].message);
                }
                res.redirect('/')
            })
        })
    },
}