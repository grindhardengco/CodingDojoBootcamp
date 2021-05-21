const mongoose = require('mongoose'),
    Whatev = mongoose.model('Whatev')

module.exports = {
    
    index: function(req, res) {
        // res.render("index");
    },

    post_to_session: function(req, res) {
        // console.log("POST DATA", req.body);
        req.session.whatev = req.body.whatev;
        res.redirect('/aroutetodisplaysomething');
    },

    render_session: function(req,res){
        if(!session.whatev){
            session.whatev="notnowfoo'!"
        }
        res.render("ejsfilename",{
            whatev: req.session.whatev,
            whatev2: req.session.whatev2,
        });
    },

    post_to_db: function(req,res){
        var whatev = new Whatev();
        whatev.key1 = req.body.form_input_name1;
        whatev.key2 = req.body.form_input_name2;
        bcrypt.hash('somethingrandomornot',12)
            .then(function(hashed_pw){
                whatev.password = hased_pw;
                whatev.save()
                .then(function (whatevdata){
                    console.log('****registryofsomekindofdocumentincludingapassword successful: ', whatevdata);
                    res.redirect('/somewhere')
                })
                .catch(function(err){
                    console.log('err:',err);
                    for (var key in err.errors){
                        req.flash('somethingrelavent', err.errors[key].message);
                    }
                    res.redirect('/away')
                })
            })
            .catch(function(err){
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

    render_db: function(req, res) {
        Whatev.find()
            .then(function (whatevdata){
                whatev = whatevdata;
                // console.log(whatev);
                res.render('thatejsfile',{
                    key1:whatev.blegh1,
                    key2:whatev.blegh2,
                    key3:whatev.created_at,
            })
            //or .then(function (whatevdata){res.render('thatejsfile',{whatev:whatevdata[0]})
            .catch(function (err){
                console.log(err);
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
        })
    },

    render_edit: function(req, res) {
        Whatev.find({_id:req.params.id})
            .then(function(whatevdata){
                res.render('edit',{whatev:whatevdata[0]});
            })
            .catch(function(err){
                console.log('****errors: ',err)
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

    process_edit: function(req,res){
        //update document from post 
        Whatev.updateOne({_id:req.params.id},{$set:{
            whatevkey1: req.body.whatev1,
            whatevkey2: req.body.whatev2,
        }})
            .then(function(whatevdata){
                res.redirect(`/whatev/${req.params.id}`);
            })
            .catch(function(err){
                console.log('****errors: ',err)
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

}