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
            password:req.body.pass,
            phno:req.body.number,
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
            {res.send("This Email is taken. If already registered go to login.");}
        else
            {newuser.save();console.log("mercdone");res.send('done').status(200);}
    })




}) 

module.exports=router