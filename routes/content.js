const express = require("express");
const router = express.Router();
const { content } = require("../controllers/contentController");

router.route("/add/content").post(content);

module.exports = router;