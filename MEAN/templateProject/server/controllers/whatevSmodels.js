const {Whatev, Whatev2} = require('./model/whatev.js'),

module.exports = {
    
    index: (req,res)=>{
        // res.render("index");
    },

    post_to_session: (req,res)=>{
        // console.log("POST DATA", req.body);
        req.session.whatev = req.body.whatev;
        res.redirect('/aroutetodisplaysomething');
    },

    render_session: (req,res)=>{
        if(!session.whatev){
            session.whatev="notnowfoo'!"
        }
        res.render("ejsfilename",{
            whatev: req.session.whatev,
            whatev2: req.session.whatev2,
        });
    },

    post_to_db: (req,res)=>{
        var whatev = new Whatev();
        whatev.key1 = req.body.form_input_name1;
        whatev.key2 = req.body.form_input_name2;
        bcrypt.hash('somethingrandomornot',12)
            .then(hashed_pw=>{
                whatev.password = hashed_pw;
                whatev.save()
                .then(whatevdata=>{
                    console.log('****registryofsomekindofdocumentincludingapassword successful: ', whatevdata);
                    res.redirect('/somewhere')
                })
                .catch(err=>{
                    console.log('err:',err);
                    for (var key in err.errors){
                        req.flash('somethingrelavent', err.errors[key].message);
                    }
                    res.redirect('/away')
                })
            })
            .catch(err=>{
                console.log('err:',err);
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

    render_db: (req,res)=>{
        Whatev.find()
            .then(whatevdata=>{
                whatev = whatevdata;
                // console.log(whatev);
                res.render('thatejsfile',{
                    key1:whatev.blegh1,
                    key2:whatev.blegh2,
                    key3:whatev.created_at,
            })
            //or .then(whatevdata=>{res.render('thatejsfile',{whatev:whatevdata[0]})
            .catch(function (err){
                console.log(err);
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
        })
    },

    render_edit: (req,res)=>{
        Whatev.find({_id:req.params.id})
            .then(whatevdata=>{
                res.render('edit',{whatev:whatevdata[0]});
            })
            .catch(err=>{
                console.log('****errors: ',err)
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

    process_edit: (req,res)=>{
        //update document from post 
        Whatev.updateOne({_id:req.params.id},{$set:{
            whatevkey1: req.body.whatev1,
            whatevkey2: req.body.whatev2,
        }})
            .then(whatevdata=>{
                res.redirect(`/whatev/${req.params.id}`);
            })
            .catch(err=>{
                console.log('****errors: ',err)
                for (var key in err.errors){
                    req.flash('somethingrelavent', err.errors[key].message);
                }
                res.redirect('/away')
            })
    },

}