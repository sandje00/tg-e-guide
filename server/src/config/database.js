const Sequelize = require('sequelize');

module.exports = new Sequelize('tg-e-guide', 'root', '11235TumPeccet81321', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });