const express=require("express")
const router=express.Router();
const User=require("../Model/User")
router.post("/",async(req,res)=>{
    const UserData=new User({
    email:req.body.email,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    age:req.body.age,
    fid:req.body.fid,
      
    }

    )
    await UserData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post data")
    })
})


router.get("/",async(req,res)=>{
    try{
        const data=await User.find();
        res.json(data).status(200)
    } catch(error){
        console.log(error);
        res.status(404).json({error:"Internal server error"})
    }
})
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        const data=await User.findOne({fid:id});

        if(!data){
            res.status(404).json({error:"Application not found"})
        } else
        res.json(data).status(200)
    } catch(error){
        console.log(error);
        res.status(404).json({error:"Internal server error"})
    }
})

router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    const newdata=req.body;
    try{
        const data=await User.findByIdAndUpdate(id,{$set:newdata},{new:true});

        if(!data){
            req.status(404).json({error:"Unable to update data"})
        } else
        res.json(data).status(200)
    } catch(error){
        console.log(error);
        res.status(404).json({error:"Internal server error"})
    }
})


module.exports=router