const express=require('express')
const router=express.Router();
const Post=require('../Model/Post')

router.post('/',async(req,res)=>{
    const newPost=new Post({
        content:req.body.content,
        postOwner:req.body.postOwner,
        tag:req.body.tag,
        Type:req.body.Type,
       

    })

    await newPost.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err,"not able to save post")
    })
})

router.get('/',async(req,res)=>{
    try{
        const data=await Post.find()
        res.json(data).status(200)
    }
    catch(err){
        console.log(err)
        res.json({error:"Internal server error"})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const data=await Post.findById(req.params.id);
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
        const data=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
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

module.exports=router