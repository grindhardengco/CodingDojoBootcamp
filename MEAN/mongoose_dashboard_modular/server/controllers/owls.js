const mongoose = require('mongoose'),
    Owl = mongoose.model('Owl')

module.exports = {
    index: function(req, res) {
        Owl.find()
            .then(function(owldata){
                res.render("index",{owls:owldata});
            })
            .catch(function(err){
                console.log('****errors: ',err)
            })
    },

    new_owl: function(req, res) {
        res.render("new");
    },

    process_new: function(req,res){
        //create document from post 
        var owl = new Owl();
        owl.name = req.body.name
        owl.height = req.body.height
        owl.location = req.body.location
        owl.diet = req.body.diet
        owl.save()
            .then(function(owldata){
                console.log('****owl added: ',owldata)
                res.redirect('/');
            })
            .catch(function(err){
                console.log('****errors: ',err);
            })
    },

    details: function(req,res){
        Owl.find({_id:req.params.id})
            .then(function(owldata){
                res.render('detail',{owl:owldata[0]});
            })
            .catch(function(err){
                console.log('****errors: ',err)
            })
    },

    edit: function(req, res) {
        Owl.find({_id:req.params.id})
            .then(function(owldata){
                res.render('edit',{owl:owldata[0]});
            })
            .catch(function(err){
                console.log('****errors: ',err)
            })
    },

    process_edit: function(req,res){
        //update document from post 
        Owl.updateOne({_id:req.params.id},{$set:{
            name: req.body.name,
            height: req.body.height,
            location: req.body.location,
            diet: req.body.diet,
        }})
            .then(function(owldata){
                res.redirect(`/owl/${req.params.id}`);
            })
            .catch(function(err){
                console.log('****errors: ',err)
            })
    },

    destroy: function(req,res){
        //destroy owl document from collection
        Owl.deleteOne({_id:req.params.id})
            .then(function(owldata){
                console.log('****owl deleted: ',owldata[0])
                res.redirect('/');
            })
            .catch(function(err){
                console.log('****errors: ',err)
            })
    },
}