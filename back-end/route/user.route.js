const UserController = require("../controller/user.controller")
const express = require("express")
const router = express.Router()

router.route("/")   
    .post(UserController.createUser)

router.route("/:id")
    .get(UserController.getUser)   

module.exports = router


