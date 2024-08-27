const mongoose=require('mongoose')
const commentSchema=require('./comment')
const User =require('./User')



const PostScheme= new mongoose.Schema({

    postOwner:String,
    tag:String,
    content:String,
    Type:{
        type:String,
        enum:["image","video"],
        required:true
    },
    likes:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }],
        default:[],

    }
    ,
    comments:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:commentSchema
        }],
        default:[]
       
    }
},{timestamps:true})

module.exports=mongoose.model("post",PostScheme)