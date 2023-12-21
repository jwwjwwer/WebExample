const express = require("express");
const mongoose = require("mongoose");
//const Post = require("./models/Post");
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

//Express, app connection
const app = express();

//Middlewares
//This is for view all content
app.use(express.static("public"));
//This is for catch input from request
app.use(express.urlencoded({extended:true}));
//This is for convert input 
app.use(express.json());

//DB and Schema Connection
mongoose.connect('mongodb://127.0.0.1:27017/Photos');
console.log("Connected to DB!");


//Template Engine
app.set("view engine","ejs");

//Routes
app.get("/",pageController.getIndexPage);
app.get("/about",pageController.getAboutPage);
app.get("/index",pageController.getIndexPage);
//This for read from db and put posts after get post page
app.get("/post", postController.getAllPosts);
app.get("/add_post",pageController.getAddPostPage);
//This is create post and write to db, for catch we used action param in form element, in add_post.ejs file 
app.post("/posts", postController.createPost);

//Port is listening by app
app.listen(3000);

