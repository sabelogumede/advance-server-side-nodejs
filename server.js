const express = require('express'),
    app = express(),
    mongodb = require(mongodb),
    mongodb = require('mongoose'),
    port = process.env.PORT || 3000,
    myDB = 'mongodb://localhost/advancedproject1',
    User = require('./Models/users.model.js');

// connect to mongodb
mongoose.connect(myDB);

// 
app.listern(port,(error)=>{
    if(!error){
        console.log('listerning on port', PromiseRejectionEvent)
    }else{
        console.log(error);
    }
})

