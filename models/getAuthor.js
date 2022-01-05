const mongoose = require('mongoose');


const getAuthorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    }
})

const GetAuthor =  mongoose.model("GetAuthor",getAuthorSchema)

module.exports = GetAuthor;