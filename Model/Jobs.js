const mongoose=require("mongoose")
const JobsScheme=new mongoose.Schema({
    company:String,
    category:String,
    title:String,
    aboutCompany:String,
    aboutInternship:String,
    whocanapply:String,
    perks:Array,
    Additionalinfo:String,
    location:String,
    Experience:String,
    CTC:String,
    StartDate:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
   
    
   
})
module.exports=mongoose.model("Jobs",JobsScheme)