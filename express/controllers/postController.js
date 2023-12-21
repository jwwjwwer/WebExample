const Post = require("../models/Post");

//Return all posts and render
exports.getAllPosts = async (req,res)=>{
    const posts = await Post.find({});
    //console.log(posts);
    res.render("post",{posts});
}
//Create post and redirect page
exports.createPost = async (req,res)=>{
    await Post.create(req.body);
    //console.log(req.body);
    res.redirect("post"); 
}        


