const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    authorId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Author' //ye mongoose ka id hoga jo humein author se milega
    },
    bookName:{
        type:String
    },
    
})



const Book = mongoose.model('Book',BookSchema);

module.exports = Book;

//author --> product
//book --> order