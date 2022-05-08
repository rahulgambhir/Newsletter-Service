const express = require("express");
const router = express.Router();
const cron = require("node-cron");

const { email } = require("../controllers/emailController");

// Will call the email() every hour
cron.schedule("* * * *", () => {
  email();
});

module.exports = router;
