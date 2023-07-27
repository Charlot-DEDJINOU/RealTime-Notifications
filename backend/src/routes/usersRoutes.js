const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route pour créer un nouvel utilisateur
router.post('/users', usersController.createUser);

// Route pour se connecter en tant qu'utilisateur
router.post('/users/login', usersController.loginUser);

// Route pour récupérer les détails d'un utilisateur par son ID
router.get('/users/:id', usersController.getUserById);

module.exports = router;
