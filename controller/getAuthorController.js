const Author = require('../models/author');


const getAllAuthor = async function(req,res){
    const author = await Author.find({});

    // console.log(author)

    if(author){
        res.status(201).json({
            author:author,
            message:"succes"
        })
    }else {
        res.status(500).json({
            message:"failed"
        })
    }
}   

module.exports = getAllAuthor;