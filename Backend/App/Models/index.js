const dbConfig = require("../Config/db.config");

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(dbConfig.url);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./users.model.js")(sequelize, Sequelize);
db.Conversations = require("./conversation.model.js")(sequelize, Sequelize);
db.GroupMembers = require("./groupMembers.model.js")(sequelize, Sequelize);
db.Messages = require("./messages.model.js")(sequelize, Sequelize);

module.exports = db;