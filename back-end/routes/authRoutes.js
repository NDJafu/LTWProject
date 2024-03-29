const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  ifAccountExist,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/ifaccountexist", ifAccountExist);

module.exports = router;
