const Post = require("../models/Post");
const Comment = require("../models/Comment"); //adding the requirement of comment model
const User = require("../models/User");


module.exports = {
//     getIndex: (req, res) => {
//       res.render("exercise.ejs");
//     },
//   };

  getIndex: async (req, res) => {
    try {
      const user = await User.find({ user: req.user.id });
      res.render("exercise.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  }
}