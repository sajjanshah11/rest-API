const express = require('express');
const mongoose = require('mongoose');

//setup our express app
const app = express();

//connect to db

mongoose.connect('mongodb+srv://restAPI:1234@cluster0.zodzi.mongodb.net/restAPI?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());

//initialising routes
app.use('/api',require('./router/api'));

//error handling middleware
app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});


//listen for request
app.listen(process.env.port || 4000, function(){
   console.log('now listening for requests');
});