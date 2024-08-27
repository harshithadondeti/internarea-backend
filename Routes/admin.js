const express=require("express")
const router=express.Router();
const adminUsername='admin'
const adminPassword='adminpassword'

router.post("/adminLogin",(req,res)=>{
    const {username,password}=req.body
    if (username===adminUsername|| password===adminPassword){
        res.json({status:"success"})
    }
    else{
        res.status(401).json({status:"failed"})
    }
})
module.exports=router