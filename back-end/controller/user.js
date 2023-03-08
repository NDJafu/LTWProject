const User = require("../models/User");

const getAllUser = (req, res) => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const ifUserExist = (req, res) => {
  const email = req.query.email;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password, isAdmin: false });
  console.log(email, password);
  res.status(201).json({ user });
};
const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.exists({ email: email, password: password }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(doc);
    }
  });
};

module.exports = { ifUserExist, getAllUser, registerUser, loginUser };
