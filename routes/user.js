const express = require('express')
const router = express.Router()
const ms= require('../models/merc_Schema')
var c;
router.post('/',(req,res)=>
{
    //res.send("User Dashboard")
    ms.find({city:req.body.city}&&{domain:req.body.domain})
    .exec()
    .then(user=>{
        if(user.length>0)
            {   c="";
                for(i=0;i<user.length;i++)
                    {if(user[i].price<=req.body.price)
                        c+=user[i]
                    }
                res.send(c)

            }
        else
            res.send("no one is there to help you")
    })




}) 


module.exports = router