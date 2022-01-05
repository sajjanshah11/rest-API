const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema(
    {
        // _id: mongoose.Schema.Types.ObjectId,
        name:{
            type:String,
            required:true
        }
    }
)


const Author = mongoose.model("Author",AuthorSchema);

module.exports = Author;



