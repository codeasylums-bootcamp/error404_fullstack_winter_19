const express = require('express')
const router = express.Router()
const us= require('../models/user_Schema')
const login=require('../auth/login')

router.post('/',(req,res)=>
{
    //res.send("User Signup")
    const newuser= new us(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.pass,
            //phno:req.body.number,
            city:req.body.city,
            type:"user" 
        }
    )

    us.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>0)
            {console.log("Email Taken")
            res.send("This Email is taken. Try with a new one")}
        else
            {newuser.save();console.log("Signup Done");res.send("done").status(200)}
    })




}) 



module.exports = router