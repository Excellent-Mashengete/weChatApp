const dbConfig = require("../Config/db.config");
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgresql://postgres:xL7crgOFUzQi9liiQzqR@containers-us-west-152.railway.app:5967/railway")


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
// db.group_members = require("./group_members.model.js")(sequelize, Sequelize);
// db.group_messages = require("./group_messages.model.js")(sequelize, Sequelize);
// db.messages = require("./messages.model.js")(sequelize, Sequelize);

module.exports = db;