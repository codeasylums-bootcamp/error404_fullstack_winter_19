const mongoose = require('mongoose') 

const userSchema= mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        phno:{type:Number,required:true},
        type:String
        
    }
)


module.exports = mongoose.model('user',userSchema)