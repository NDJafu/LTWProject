<<<<<<< HEAD
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
=======
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
>>>>>>> huy.back_end

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
<<<<<<< HEAD
    required: [false, "Please provide name"],
=======
    required: [true, 'Please provide name'],
>>>>>>> huy.back_end
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
<<<<<<< HEAD
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
=======
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
>>>>>>> huy.back_end
    },
  },
  password: {
    type: String,
<<<<<<< HEAD
    required: [true, "Please provide password"],
=======
    required: [true, 'Please provide password'],
>>>>>>> huy.back_end
    minlength: 6,
  },
  role: {
    type: String,
<<<<<<< HEAD
    enum: ["admin", "user"],
    default: "user",
  },
});

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified("password")) return;
=======
    enum: ['admin', 'user'],
    default: 'user',
  },
});

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
>>>>>>> huy.back_end
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

<<<<<<< HEAD
module.exports = mongoose.model("User", UserSchema);
=======
module.exports = mongoose.model('User', UserSchema);
>>>>>>> huy.back_end
