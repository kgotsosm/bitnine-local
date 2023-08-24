const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser } = require('../controllers/authController');

// Configure CORS with credentials for the router
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

// Define endpoints
router.get('/test', test);
router.post('/', registerUser);
router.post('/login', loginUser)

module.exports = router;
