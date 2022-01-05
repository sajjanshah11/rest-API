const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./router/authRouter')
const bookRouter = require('./router/bookRouter')


//setup our express app
const app = express();

//connect to db

mongoose.connect('mongodb+srv://restAPI:1234@cluster0.zodzi.mongodb.net/restAPI?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());


//initialising routes
// app.use('/api',require('./router/bookRouter'));
app.use('/api',authRouter);
app.use('/api',bookRouter);



//error handling middleware
app.use(function(err,req,res,next){
   res.status(404).send({error: err.message});
});


//listen for request
app.listen(process.env.port || 4000, function(){
   console.log('now listening for requests');
});