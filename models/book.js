const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId, ref:'Author'
    },
    BookName:{
        type:String
    }
})

const Book = mongoose.model('Book',BookSchema);

module.exports = Book;

//author --> product
//book --> order