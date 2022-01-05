const Book = require('../models/book');
const Author = require('../models/author')

const saveBookName = async function(req,res){

    console.log(req.body)
    const author = await Author.findById(req.body.authorId)

    if(!author){
        res.status(404).json({
			message: 'author not found'
		})
    }
    else {
        const book = await Book.create({
            _id: mongoose.Types.ObjectId(),
            bookName: req.body.bookName
        })

        if(book){
            res.status(201).json({
                message:"book stored"
            })
        } else {
            res.status(500).json({
                message:"book not stored! Error"
            })
        }
    }


}

module.exports = saveBookName;