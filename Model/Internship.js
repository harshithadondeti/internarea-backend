const mongoose=require("mongoose")
const InternshipScheme=new mongoose.Schema({
    company:String,
    category:String,
    title:String,
    aboutCompany:String,
    aboutInternship:String,
    whocanapply:String,
    perks:Array,
    Additionalinfo:String,
    location:String,
    Duration:String,
    stipened:String,
    StartDate:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
   
    
   
})
module.exports=mongoose.model("Internship",InternshipScheme)