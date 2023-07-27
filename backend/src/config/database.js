const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo_db', 'root', 'Charlot1xbet@2003', {
  host: 'localhost', 
  dialect: 'mysql',
});

module.exports = sequelize;
