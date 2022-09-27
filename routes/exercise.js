const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const exerciseController = require("../controllers/exercise");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, exerciseController.getIndex);

module.exports = router;