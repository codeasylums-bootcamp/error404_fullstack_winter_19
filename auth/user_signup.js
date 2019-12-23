const express = require('express')
const router = express.Router()
const us= require('../models/user_Schema')

router.post('/',(req,res)=>
{
    //res.send("User Signup")
    const newuser= new us(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phno:req.body.phno,
            type:"user" 
        }
    )

    us.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            res.send("This Email is taken. Try with a new one")
        else
            {newuser.save();res.send('Welcome');}
    })




}) 



module.exports = router