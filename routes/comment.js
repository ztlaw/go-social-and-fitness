const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment");

//Comment Routes -- 
//when the user pings the endpoint /comments/createComment/:id, 
//go to the commentController (which is the path to /controllers/comment folder),
//and use the createComment method

router.post("/createComment/:id", commentController.createComment);



module.exports = router;