const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./database.db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model.js')(sequelize, Sequelize);

module.exports = db;