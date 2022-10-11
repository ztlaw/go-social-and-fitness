const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  
  getIndex: async (req, res) => {
    try{
    let posts = await Post.find();
    let users = await User.find({});
   console.log(users)
    console.log(posts)
    res.render("index.ejs", {posts: posts, users: users});
  } catch (err) {
    console.log(err);
  }
  },
};
