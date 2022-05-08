const express = require("express");
const router = express.Router();
const cron = require("node-cron");

const { email } = require("../controllers/emailController");

// Will call the email() every hour
cron.schedule("0 * * * *", () => {
  email();
});

module.exports = router;
