const {Author} = require('../models/author.js')

module.exports = {
    
    index: (req,res)=>{
    },

    addAuthor: (req,res)=>{
        var newAuthor = new Author()
        newAuthor.name = req.body.name
        newAuthor.save()
            .then(data=>{
                console.log("Author added: ",data)
                res.json(data)
            })
            .catch(err=>{
                console.log('errors adding an author: ',err)
                res.json(err)
            })
    },

    listAuthors: (req,res)=>{
        Author.find()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log("errors listing all authors: ",err)
                res.json(err)
            })
    },

    fetchAuthor: (req,res)=>{
        Author.findOne({_id: req.params.id})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log("errors finding author: ",err)
                res.json(err)
            })
    },

    updateAuthor: (req,res)=>{
        Author.updateOne({_id: req.params.id}, {$set:{name: req.body.name}})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log("errors updating author: ",err)
                res.json(err)
            })
    },

    addQuote: (req,res)=>{
        Author.updateOne({_id: req.params.id}, {$push:{quote: req.body}})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log("errors updating author: ",err)
                res.json(err)
            })            
    },

    updateVote: (req,res)=>{
        Author.updateOne(
            {_id: req.params.id}, 
            {$set:{"quote.$[orderItem].vote": (parseInt(req.body.vote) + parseInt(req.params.val))}}, 
            {arrayFilters: [{"orderItem._id": req.body._id}]
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            console.log("errors incrementing vote: ",err)
            res.json(err)
        })
    },

    deleteQuote: (req,res)=>{
        console.log("model received req.params: ",req.params)
        Author.updateOne(
            {_id: req.params.id}, 
            {$pull:{"quote": {"_id": req.params.quoteid}}}
        )
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    // rate: (req,res)=>{
    //     var newRating = new Rating()
    //     newRating.stars = req.body.stars
    //     newRating.comment = req.body.comment
    //     newRating.save()
    //         .then(ratingData=>{
    //             console.log("rating created: ",ratingData)
    //             //associate
    //             Cake.findOneAndUpdate({_id: req.params.id},{$push:{ratings:ratingData}})
    //                 .then(cakeData=>{
    //                     console.log("Rating added to cake: ",cakeData)
    //                     res.json(cakeData)
    //                 })
    //                 .catch(err=>{
    //                     console.log("error pushing rating to cake: ",err)
    //                     res.json(err)
    //                 })
    //         })
    //         .catch(err=>{
    //             console.log('errors creating rating: ',err)
    //             res.json(err)
    //         })
    // },

    // details: (req,res)=>{
    //     Cake.find({_id: req.params.id})
    //         .then(data=>{
    //             console.log("Detail data available: ",data[0])
    //             res.json(data)
    //         })
    //         .catch(err=>{
    //             console.log("errors fetching details: ",err)
    //             res.json(err)
    //         })
    // },





    // post_to_session: (req,res)=>{
    //     // console.log("POST DATA", req.body);
    //     req.session.whatev = req.body.whatev;
    //     res.redirect('/aroutetodisplaysomething');
    // },

    // render_session: (req,res)=>{
    //     if(!session.whatev){
    //         session.whatev="notnowfoo'!"
    //     }
    //     res.render("ejsfilename",{
    //         whatev: req.session.whatev,
    //         whatev2: req.session.whatev2,
    //     });
    // },

    // post_to_db: (req,res)=>{
    //     var whatev = new Whatev();
    //     whatev.key1 = req.body.form_input_name1;
    //     whatev.key2 = req.body.form_input_name2;
    //     bcrypt.hash('somethingrandomornot',12)
    //         .then(hashed_pw=>{
    //             whatev.password = hashed_pw;
    //             whatev.save()
    //             .then(whatevdata=>{
    //                 console.log('****registryofsomekindofdocumentincludingapassword successful: ', whatevdata);
    //                 res.redirect('/somewhere')
    //             })
    //             .catch(err=>{
    //                 console.log('err:',err);
    //                 for (var key in err.errors){
    //                     req.flash('somethingrelavent', err.errors[key].message);
    //                 }
    //                 res.redirect('/away')
    //             })
    //         })
    //         .catch(err=>{
    //             console.log('err:',err);
    //             for (var key in err.errors){
    //                 req.flash('somethingrelavent', err.errors[key].message);
    //             }
    //             res.redirect('/away')
    //         })
    // },

    // render_db: (req,res)=>{
    //     Whatev.find()
    //         .then(whatevdata=>{
    //             whatev = whatevdata;
    //             // console.log(whatev);
    //             res.render('thatejsfile',{
    //                 key1:whatev.blegh1,
    //                 key2:whatev.blegh2,
    //                 key3:whatev.created_at,
    //         })
    //         //or .then(whatevdata=>{res.render('thatejsfile',{whatev:whatevdata[0]})
    //         .catch(function (err){
    //             console.log(err);
    //             for (var key in err.errors){
    //                 req.flash('somethingrelavent', err.errors[key].message);
    //             }
    //             res.redirect('/away')
    //         })
    //     })
    // },

    // render_edit: (req,res)=>{
    //     Whatev.find({_id:req.params.id})
    //         .then(whatevdata=>{
    //             res.render('edit',{whatev:whatevdata[0]});
    //         })
    //         .catch(err=>{
    //             console.log('****errors: ',err)
    //             for (var key in err.errors){
    //                 req.flash('somethingrelavent', err.errors[key].message);
    //             }
    //             res.redirect('/away')
    //         })
    // },

    // process_edit: (req,res)=>{
    //     //update document from post 
    //     Whatev.updateOne({_id:req.params.id},{$set:{
    //         whatevkey1: req.body.whatev1,
    //         whatevkey2: req.body.whatev2,
    //     }})
    //         .then(whatevdata=>{
    //             res.redirect(`/whatev/${req.params.id}`);
    //         })
    //         .catch(err=>{
    //             console.log('****errors: ',err)
    //             for (var key in err.errors){
    //                 req.flash('somethingrelavent', err.errors[key].message);
    //             }
    //             res.redirect('/away')
    //         })
    //},

}