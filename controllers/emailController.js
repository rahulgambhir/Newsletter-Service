const mailHelper = require("../utils/emailHelper");
const User = require("../models/user");
const Content = require("../models/content");
const topicController = require("./topicController");
const topics = topicController.topics;

exports.email = async (req, res) => {
  let givenDate = new Date();
  givenDate = givenDate.toISOString().slice(0, 19);

  for (let i = 0; i < topics.length; i++) {
    const contentTopic = topics[i];

    const content = await Content.findOne({
      topic: contentTopic,
      time: new Date(givenDate + "Z"),
      isSent: false,
    });

    const UsersArray = [];
    
    if (content) {
      const Users = await User.find(
        {
          topic: contentTopic,
        },
        "email"
      );

      for (let i = 0; i < Users.length; i++) {
        UsersArray.push(Users[i].email);
      }
    }

    if (content && UsersArray.length > 0) {
      sendEmail(UsersArray, content);
    }
  }
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
