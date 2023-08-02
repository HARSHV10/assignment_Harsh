const { readAndInsertData } = require('../model/readAndInsertData')
// const readAndInsert=require("./model/readAndInsertData");


async function handelUpload(req,res){
    try{
        console.log("opening file")
       readAndInsertData(req.file.path);
       res.send("hello")
    }
    catch(e){
        res.status(500)
        console.log(e)
    }
}
module.exports={handelUpload}