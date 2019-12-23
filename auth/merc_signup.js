const express = require('express')
const router = express.Router()
const ms= require('../models/merc_Schema')

router.post('/',(req,res)=>
{
    //res.send("User Signup")
    const newuser= new ms(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phno:req.body.phno,
            type:"merc" ,
            city:req.body.city,
            price:req.body.price,
            domain:req.body.domain
        }
    )

    ms.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.send("This Email is taken. Try with a new one")
        else
            {newuser.save();res.send('Welcome');}
    })




}) 

module.exports=router