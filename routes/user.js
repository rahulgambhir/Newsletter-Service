const express = require("express");
const router = express.Router();
const { user } = require("../controllers/userController");

router.route("/add/user").post(user);

module.exports = router;