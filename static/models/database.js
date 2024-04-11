const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./database.db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model.js')(sequelize, Sequelize);
db.info = require('./info.model.js')(sequelize, Sequelize);
db.experience = require('./experience.model.js')(sequelize, Sequelize);
db.certificates = require('./certificates.model.js')(sequelize, Sequelize);
db.expertise = require('./expertise.model.js')(sequelize, Sequelize);
db.interest = require('./interest.model.js')(sequelize, Sequelize);
db.skills = require('./skills.model.js')(sequelize, Sequelize);
db.education = require('./education.model.js')(sequelize, Sequelize);
db.styles = require('./styles.model.js')(sequelize, Sequelize);

module.exports = db;