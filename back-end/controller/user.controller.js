const User = require("../model/Site_User.model")
const bcrypt = require('bcrypt');



class UserController {
    async getUser (req, res) {
        const {id} = req.params
        console.log(req.body)

        const user = await User.find({_id: id})
        console.log(user)
        res.json({user})
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
}

module.exports = new UserController