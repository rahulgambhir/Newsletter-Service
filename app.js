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
const user = require('./routes/user');
const content = require('./routes/content');

// router middleware
app.use("/", user);
app.use("/", content);

// export app js
module.exports = app;
