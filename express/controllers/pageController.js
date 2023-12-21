exports.getIndexPage = (req,res)=>{
    res.render("index");
}

exports.getAboutPage = (req,res)=>{
    res.render("about");
}

exports.getPostPage = (req,res)=>{
    res.render("post");
}

exports.getAddPostPage = (req,res)=>{
    res.render("add_post");
}