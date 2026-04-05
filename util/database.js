const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', 'your_password', {
  dialect: 'mysql',
  host: '127.0.0.1'
});

module.exports = sequelize;
