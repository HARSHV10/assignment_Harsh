const {MongoClient}=require("mongodb")


let url="mongodb+srv://kioken:IcYNTAbGZPwNkeHq@cluster0.0gedaos.mongodb.net/?retryWrites=true&w=majority"
let collection="excel"
let db;
exports.connectdb=async ()=>{
    try{
        const client=await MongoClient.connect(url,{ useUnifiedTopology: true });
        db=client.db("todoProj")
        console.log("connected");
    }
    catch(e){
        console.log(e);
    }
}
exports.get_db=()=>{
    return db;
}

