const Exercise = require("../models/Exercise");
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
      console.log(req.user)
    } catch (err) {
      console.log(err);
    }
  },

  createExercise: async (req, res) => {
    try {


      await Exercise.create({
        type : req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance,
        user: req.user.id,
      });
      console.log(req.body)
      console.log("Exercise has been added!");
      res.redirect("/exercise");
    } catch (err) {
      console.log(err);
    }
  }
}