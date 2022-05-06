const mailHelper = require("../utils/emailHelper");
const User = require("../models/user");
const Content = require("../models/content");
const { endOfDay, startOfDay } = require("date-fns");

exports.email = async (req, res) => {
  const givenDate = new Date();

  const techContent = await Content.findOne({
    topic: "tech",
    time: { $gte: startOfDay(givenDate), $lt: endOfDay(givenDate) },
    isSent: false,
  });

  const techUsers = await User.find(
    {
      topic: "tech",
    },
    "email"
  );

  const techUsersArray = [];

  for(let i=0; i<techUsers.length; i++){
    techUsersArray.push(techUsers[i].email);
  }

  sendEmail(techUsersArray, techContent)

  const healthContent = await Content.findOne({
    topic: "health",
    time: { $gte: startOfDay(givenDate), $lt: endOfDay(givenDate) },
    isSent: false,
  });

  const healthUsers = await User.find(
    {
      topic: "health",
    },
    "email"
  );

  const healthUsersArray = [];

  for(let i=0; i<healthUsers.length; i++){
    healthUsersArray.push(healthUsers[i].email);
  }

  sendEmail(healthUsersArray, healthContent)

  const motivationContent = await Content.findOne({
    topic: "motivation",
    time: { $gte: startOfDay(givenDate), $lt: endOfDay(givenDate) },
    isSent: false,
  });

  const motivationUsers = await User.find(
    {
      topic: "motivation",
    },
    "email"
  );

  const motivationUsersArray = [];

  for(let i=0; i<motivationUsers.length; i++){
    motivationUsersArray.push(motivationUsers[i].email);
  }

  sendEmail(motivationUsersArray, motivationContent)

  res.json("Sent the emails successfully!");
};

async function sendEmail(users, content) {
  // attempt to send email
  try {
    await mailHelper({
      email: users,
      subject: `Hi! here's the topic for today - ${content.topic}`,
      message: content.body,
    });
  } catch (error) {
    console.log(error);
  }
}
