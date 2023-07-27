const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./config/database');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tables synchronisées avec la base de données.');
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation des tables :', err);
});

const notificationsRoutes = require('./routes/notificationsRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use(cors())

app.use('/api', notificationsRoutes);
app.use('/api', usersRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
