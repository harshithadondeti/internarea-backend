const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    writer:String,
    content:String, 
    
},{timestamps:true})

module.exports=mongoose.model("Comment",commentSchema)