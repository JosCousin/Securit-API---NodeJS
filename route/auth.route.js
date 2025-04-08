const express = require('express');
const router = express.Router();
const AuthController = require('../controller/auth.controller.js');

router.post('/login', AuthController.login);


module.exports = router;