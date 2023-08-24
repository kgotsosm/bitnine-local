const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('Test is working!')
}

// Register user endpoint
const registerUser = async (req, res) => {

    try {
        const {name, email, password} = req.body

        //Check email
        const exist = await User.findOne({email})

        if(exist) {
            return res.json({
                error: "Email already registered"
            })
        }

        const hashedPassword = await hashPassword(password)

        // Create the user in db
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return res.json(user)

    } catch (error) {
        console.log("Error registering", error)
    }

}

// Login endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        // Check if user exists in db
        const user = await User.findOne({email})
        if(!user) {
            return res.json({
                error: "No user found"
            })
        }
        // Check if passwords match
        const match = await comparePassword(password, user.password)
        if(match) {
            res.json('Welcome! Signed in successfully')
        }
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}