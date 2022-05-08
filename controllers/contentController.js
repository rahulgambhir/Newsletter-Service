const Content = require("../models/content");

exports.content = async (req, res) => {
  const { topic, body, time } = req?.body;

  if (!topic || !body || !time) {
    res.json("Topic, body & time is required");
  }

  const content = new Content({
    topic,
    body,
    time,
  });

  await content.save();

  res.json(content);
};
