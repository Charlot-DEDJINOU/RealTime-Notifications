const Notification = require('../models/notificationsModel');

exports.getAllNotifications = async (req, res) => {
  const { user_id } = req.params;
  try {
    const notifications = await Notification.findAll({where : {user_id}});
    res.json(notifications);
  } catch (err) {
    console.error('Erreur lors de la récupération des notifications :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des notifications.' });
  }
};

exports.createNotification = async (req, res) => {
  const { user_id, notification } = req.body;
  try {
    const newNotification = await Notification.create({ user_id, notification });
    res.json(newNotification);
  } catch (err) {
    console.error('Erreur lors de la création de la notification :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de la notification.' });
  }
};

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { notification , lu } = req.body;
  try {
    const updatedNotification = await Notification.update(
      { notification , lu },
      { where: { id } } 
    );
    if(updatedNotification) 
      res.json({ message: 'Notification mise à jour avec succès.' });
    else
      res.json({ message: 'Echec lors de la mise à jour.' });
  } catch (err) {
    console.error('Erreur lors de la mise à jour de la notification :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de la notification.' });
  }
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNotification = await Notification.destroy({ where: { id } });
    if(deletedNotification)
      res.json({ message: 'Notification supprimée avec succès.' });
    else 
      res.json({message: 'Echec de suppression'})
  } catch (err) {
    console.error('Erreur lors de la suppression de la notification :', err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la notification.' });
  }
};
