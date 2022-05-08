const User = require("../models/user");

exports.user = async (req, res) => {
    const { name, email, topic } = req?.body;

    if(!name || !email || !topic){
        res.json("Name, email & topic is required");
    }

    const user = new User({
        name,
        email,
        topic
    })

    await user.save();

    res.json(user);
};
