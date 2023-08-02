const {connectdb,get_db} = require("../db")


exports.checkdup=(data,collection)=>{
   const check=collection.find({"Email":data.Email})
   if(check){
    return true
   }
   else{
      
    return false;
   }
   
}