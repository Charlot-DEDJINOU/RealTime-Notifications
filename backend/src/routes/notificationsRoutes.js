const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

router.get('/notifications/user/:user_id', notificationsController.getAllNotifications);

router.post('/notifications', notificationsController.createNotification);

router.delete('/notifications/:id', notificationsController.deleteNotification);

module.exports = router;
