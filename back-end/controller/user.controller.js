const User = require("../model/Site_User.model")
const bcrypt = require('bcrypt');
require("dotenv").config()
const jwt = require("jsonwebtoken")


class UserController {
    async getUser (req, res) {
        try {
            const {id} = req.params
    
            const user = await User.find({_id: id})
            res.status(200).json({user})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getAllUsers(req, res) {
        try {
          const users = await User.find({})
          res.status(200).json({users})
        } catch (error) {
          res.status(500).json({error: error.message})
        }
      }    

    async createUser(req, res) {
        try {
            const {email, name, phone, password} = req.body

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            const saltRounds = 10
            const hashedPassword = await bcrypt.hash(password, saltRounds)

            const newUser = new User({
                email,
                name,
                phone,
                password: hashedPassword
            })

            await newUser.save()
            res.status(201).json({ message: 'User created successfully', user: newUser  });
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    }

    async login(req, res) {
        console.log(req.body)

        const user = await User.findOne({email: req.body.email})
        
        if(!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({user_id: user._id, email: req.body.email}, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        res.status(200).json({msg: "Login successful", token})
    }
}

module.exports = new UserController