const mongoose = require("mongoose");
//DB moddeling
const postSchema = mongoose.Schema({
  Name : String,
  Message : String,
  Date : {
    type : Date,
    default : Date.now} 
});
const Post = mongoose.model('post',postSchema);

module.exports = Post;