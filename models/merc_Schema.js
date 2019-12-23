const mongoose = require('mongoose') 

const mercSchema= mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        phno:{type:Number,required:true},
        type:String,
        domain:{type:String,required:true}

        
    }
)


module.exports = mongoose.model('merc',mercSchema)