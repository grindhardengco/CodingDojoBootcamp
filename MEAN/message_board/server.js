const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');

app.use(express.urlencoded({ extended: true }));
app.use(session({secret:'whatisIanupto?'}))
app.use(express.static(__dirname + "/static"));
app.use(flash());
mongoose.connect('mongodb://localhost/message_board',{useNewUrlParser:true});

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name may not be empty.'], minLength: 1},
    comment: {type: String, required: [true, 'Comment may not be empty.'], minLength:1},
}, {timestamps: true});


const MessageSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'Name may not be empty.'], minlength: 1},
    message: {type:String, required: [true, 'Message may not be empty.'], minlength: 1},
    comments: [CommentSchema],
}, {timestamps: true});
const Comment = mongoose.model('Comment',CommentSchema);
const Message = mongoose.model('Message',MessageSchema);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

// root route to render
app.get('/', function(req, res) {
    Message.find()
        .then(function(messagedata){
            res.render("index",{messages:messagedata});
        })
        .catch(function(err){
            console.log('****err:',err);
            for (var key in err.errors){
                req.flash('rendering error(s): ', err.errors[key].message);
            }
            res.redirect('/')
        })
})

//route for adding message to db
app.post('/add_message', function(req,res){
    var message = new Message();
    message.name = req.body.name;
    message.message = req.body.message;
    message.save()
        .then(function (messagedata){
            console.log('****message added: ', messagedata);
            res.redirect('/')
        })
        .catch(function(err){
            console.log('err:',err);
            for (var key in err.errors){
                req.flash('message add error(s): ', err.errors[key].message);
            }
            res.redirect('/')
        })
})

//route for adding comment to db
app.post('/add_comment/:id', function(req,res){
    var comment = new Comment();
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    comment.save()
        .then(function (commentdata){
            Message.findOneAndUpdate({_id:req.params.id},{$push:{comments:commentdata}})
                .then(function(messagedata){
                    console.log('****comment added: ', messagedata);
                    res.redirect('/')
                })
                .catch(function(err){
                    console.log('err:',err);
                    for (var key in err.errors){
                        req.flash('message update with comment error(s): ', err.errors[key].message);
                    }
                    res.redirect('/')        
                })
        })
        .catch(function(err){
            console.log('err:',err);
            for (var key in err.errors){
                req.flash('comment add error(s): ', err.errors[key].comment);
            }
            res.redirect('/')
        })
})

app.listen(8000, function() {
    console.log("listening to mantis shrimp on port 8000");
});