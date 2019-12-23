const express = require('express')
const router= express.Router()
const cs = require('../models/contact_Schema')

router.post('/',(req,res)=>{

    const newuser = new cs({
        name:req.body.name,
        email:req.body.email,
        mess:req.body.mess
    })

    newuser.save()
    res.send("Thank You. Our Team will contact you soon.")

})





module.exports =router  