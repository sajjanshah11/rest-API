const Book = require('../models/book');
const Author = require('../models/author')
const mongoose = require('mongoose');


const saveBookName = async function(req,res){

    // console.log(req.body)
    const author = await Author.find({_id:req.body.authorId});

    // console.log(author[0].name);
    // const author = await Author.findById(new ObjectId(req.body.authorId))
    // console.log(author)

    if(!author){
        res.status(404).json({
			message: 'author not found'
		})
    }
    else {
        const book = await Book.create({
            _id: mongoose.Types.ObjectId(),
            bookName: req.body.bookName,
            authorId : author._id
        })

        if(book){
            res.status(201).json({
                message:"book stored",
                authorName : author[0].name,
                book:book,
            })
        } else {
            res.status(500).json({
                message:"book not stored! Error"
            })
        }
    }


}

module.exports = saveBookName;