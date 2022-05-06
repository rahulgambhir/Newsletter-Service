const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const User = require("./models/user");
const Content = require("./models/content");

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// morgan middleware
app.use(morgan('tiny'));

// import all routes here
const email = require('./routes/email');

// router middleware
app.use("/", email);

// const user = new User({
//     name: "Ramandeep Singh",
//     email: "kalana@gmail.com",
//     topic: "tech"
// })

// user.save();

// const content = new Content({
//     topic: "tech",
//     body: "This is a new tech topic",
//     time: "06-05-2022",
// })

// content.save()

// export app js
module.exports = app;
