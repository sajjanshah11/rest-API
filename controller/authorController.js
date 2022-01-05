const Author = require('../models/author')

const saveAuthorName =  async function(req,res){

    const {name} = req.body;

    console.log(name)

    const nameUpdate =  await Author.create({
        name
    })

    if(nameUpdate){
        res.status(201).json({
            message:"name stored"
        })
    } else {
        res.status(500).json({
            message:"name not stored! Error"
        })
    }

//     let nameUpdate = new Author(req.body)

//    nameUpdate.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });


        
}

module.exports = saveAuthorName;