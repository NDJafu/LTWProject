const express = require("express")
const router = express.Router()

const UserController = require("../controller/user.controller")

//const authMiddleware = require("../middleware/auth")

router.route("/")   
    .post(UserController.createUser)
    .get(UserController.getAllUsers)

router.route("/:id")
    .get(UserController.getUser)   

router.route("/login")
    .post(UserController.login)

module.exports = router


