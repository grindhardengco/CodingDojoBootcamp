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
}