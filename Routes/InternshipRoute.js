const express=require("express")
const router=express.Router();
const internship=require("../Model/Internship")
const interndata=require("../Data/InternshipDatAvl")

router.post("/",async(req,res)=>{
    const internshipData=new internship({
    company:req.body.company,
    category:req.body.category,
    title:req.body.title,
    aboutCompany:req.body.aboutCompany,
    aboutInternship:req.body.aboutInternship,
    whocanapply:req.body.whocanapply,
    perks:req.body.perks,
    Additionalinfo:req.body.Additionalinfo,
    location:req.body.location,
    Duration:req.body.Duration,
    stipened:req.body.stipened,
    StartDate:req.body.StartDate,

    }

    ) 
    await internshipData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the data")
    })

})
    

router.get("/",async (req,res)=>{
    try {
        const data=await internship.find();
        res.json(data) .status(200)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Internal server error "})
    }
})
router.get("/:id", async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await internship.findById(id);
        if (!data) {

             res.status(404).json({error:"Internship is not found "})
        }
        res.json(data) .status(200)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Internal server error "})
    }
})

module.exports=router