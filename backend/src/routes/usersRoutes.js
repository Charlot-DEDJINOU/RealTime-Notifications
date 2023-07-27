const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/users', usersController.createUser);

router.post('/users/login', usersController.loginUser);

router.get('/users/:id', usersController.getUserById);

module.exports = router;
