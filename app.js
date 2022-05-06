const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// morgan middleware
app.use(morgan('tiny'));

// import all routes here
const email = require('./routes/email');

// router middleware
app.use("/", email);

// export app js
module.exports = app;
