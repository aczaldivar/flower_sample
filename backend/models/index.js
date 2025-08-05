const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('FlowerSample', 'postgres', '6060Itnot@!', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port:5432,
});

module.exports = { sequelize, DataTypes };
