const User = require('../models/usersModel');

exports.createUser = async (req, res) => {
  const { name, email, password, admin } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const newUser = await User.create({ name, email, password, admin });
      newUser.password = "@@@@@@@@";
      res.json(newUser);
      return;
    }
    else{
      res.json({ message: 'Cet email est déjà associé à un compte' });
      return;
    }
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
};

exports.loginUser = async (req, res) => {
  const {email , password} = req.body ;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: 'Utilisateur non trouvé.Créer un compte' });
      return;
    }
    else if(user.password !== password){
      res.json({ message: 'Mot de passe incorrect' });
      return;
    }
    user.password = "@@@@@@@@@@@";
    res.json(user);
  } catch (err) {
    console.error('Erreur lors de la récupération de l\'utilisateur par e-mail :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'utilisateur.' });
  }
};

exports.getUsers = async (red, res) => {
    try {
      const users = await User.findAll() ;
      res.json(users);
      return;
    } catch(err) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', err);
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'utilisateur.' });
    }
}

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
