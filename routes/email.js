const express = require('express');
const router = express.Router();

const { email } = require('../controllers/emailController');

router.route("/send").get(email);

module.exports = router;