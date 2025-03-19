const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
    
    


});
 // Check if it's a valid Mongoose model

const UserModel=mongoose.model('User',userSchema);
console.log(UserModel);
module.exports =UserModel;
