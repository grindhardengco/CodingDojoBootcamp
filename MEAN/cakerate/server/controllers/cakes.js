const {Rating,Cake} = require('../models/cake.js')

module.exports = {
    
    index: (req, res)=>{
    },

    create: (req,res)=>{
        var newCake = new Cake()
        newCake.baker = req.body.baker
        newCake.url = req.body.url
        newCake.save()
            .then(data=>{
                console.log("Cake created: ",data)
                res.json(data)
            })
            .catch(err=>{
                console.log('errors creating a cake: ',err)
                res.json(err)
            })
    },

    showAll: (req,res)=>{
        Cake.find()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{
                console.log("errors showing all cakes: ",err)
                res.json(err)
            })
    },

    rate: (req,res)=>{
        var newRating = new Rating()
        newRating.stars = req.body.stars
        newRating.comment = req.body.comment
        newRating.save()
            .then(ratingData=>{
                console.log("rating created: ",ratingData)
                //associate
                Cake.findOneAndUpdate({_id: req.params.id},{$push:{ratings:ratingData}})
                    .then(cakeData=>{
                        console.log("Rating added to cake: ",cakeData)
                        res.json(cakeData)
                    })
                    .catch(err=>{
                        console.log("error pushing rating to cake: ",err)
                        res.json(err)
                    })
            })
            .catch(err=>{
                console.log('errors creating rating: ',err)
                res.json(err)
            })
    },

    details: (req,res)=>{
        Cake.find({_id: req.params.id})
            .then(data=>{
                console.log("Detail data available: ",data[0])
                res.json(data)
            })
            .catch(err=>{
                console.log("errors fetching details: ",err)
                res.json(err)
            })
    },
}