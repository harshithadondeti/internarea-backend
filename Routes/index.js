const express=require("express")
const router=express.Router();
const ApplicationRoute=require("./ApplicationRoutes")
const intern=require("./InternshipRoute")
const job=require("./JobRoute")
const admin=require("./admin")
const User=require("./User")
const Post=require('./Post')
const comment=require('./comment')
router.get("/",(req,res)=>{
    res.send("this is backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);
router.use('/admin',admin);
router.use('/User',User);
router.use('/post',Post);
router.use('/comment',comment);

 module.exports=router;