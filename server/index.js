const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')

const app = express()

// database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Connection failed ", err))

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/authRoutes'))
const port = 8001
app.listen(port, () => console.log(`Server running on port ${port}`))
