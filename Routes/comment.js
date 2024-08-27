const express=require('express')
const router=express.Router();
const Comment=require('../Model/comment')

router.post('/',async(req,res)=>{
    const newComment=new Comment({
        content:req.body.content,
        writer:req.body.writer,
    })

    await newComment.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err,"not able to save comment")
    })
})


router.get('/',async(req,res)=>{
    try{
        const data=await Comment.find()
        res.json(data).status(200)
    }
    catch(err){
        console.log(err)
        res.json({error:"Internal server error"})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const data=await Comment.findById(req.params.id);
        if(data){
            res.json(data).status(200)
    }else
    res.status(404).json({error:"Post not found."})
        
    }
    catch(err){
        console.log(err)
        res.json({error:"Internal server error"})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const data=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        if(data){
            res.json(data).status(200)
    }else
    res.status(404).json({error:"Comment not found."})
        
    }
    catch(err){
        console.log(err)
        res.json({error:"Internal server error"})
    }
})

module.exports=router