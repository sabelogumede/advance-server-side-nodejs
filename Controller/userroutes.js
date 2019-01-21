const Router = require('express').Router(),
User = require('../Models/users.model.js');

// get router
Router.get('/index',(req,res)=>{
    User.find({}).exec((error,users)=>{
        if(error){
            res.send(error);
        }else{
            res.send(users)
        }
    })
})

// post router
Router.post('/new',(req,res)=>{
    let newuser = new User();
    newuser.username = req.body.username;
    newuser.password = req.body.password;
    newuser.isOver21 = req.body.isOver21;
    // save new user
    newuser.save((error,user)=>{
        if(error){
            res.send(error);
        }else{
            res.send(user);
        }
    })
})



// export routers
module.exports = Router;