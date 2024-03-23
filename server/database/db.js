import mongoose from 'mongoose';

const DBConnection= async()=> {
const MONGODB_URI = `mongodb://kritikapathak2004:moQiku6DIJNdEuru@ac-xrco9l8-shard-00-00.d3fc9zp.mongodb.net:27017,ac-xrco9l8-shard-00-01.d3fc9zp.mongodb.net:27017,ac-xrco9l8-shard-00-02.d3fc9zp.mongodb.net:27017/?ssl=true&replicaSet=atlas-ecsr6n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing` ;
     try {
         await mongoose.connect(MONGODB_URI,{useNewUrlParser : true});
           console.log("database connected succesfully");
      }
      catch(error){
        console.error("error while connecting with database", error.message);
      }
}
export default DBConnection;