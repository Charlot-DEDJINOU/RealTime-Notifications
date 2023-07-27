const User = require('../models/usersModel');

exports.createUser = async (req, res) => {
  const { name, email, password, admin } = req.body;
  try {
    const newUser = await User.create({ name, email, password, admin });
    res.json(newUser);
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
};

exports.loginUser = async (req, res) => {
  // Code pour gérer la connexion de l'utilisateur...
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Utilisateur non trouvé.' });
      return;
    }
    res.json(user);
  } catch (err) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'utilisateur.' });
  }
};
