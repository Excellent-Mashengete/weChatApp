const dbConfig = require("../Config/db.config");

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(dbConfig.url);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./users.model.js")(sequelize, Sequelize);
db.participants = require("./participants.model.js")(sequelize, Sequelize);
db.conversation = require("./converesation.model.js")(sequelize, Sequelize);
db.messages = require("./messages.model.js")(sequelize, Sequelize);

db.user.belongsToMany(this.conversation, { through: this.participants });
db.conversation.belongsToMany(this.user, { through: this.participants });

db.conversation.hasMany(this.messages);
db.messages.belongsTo(this.conversation);

db.messages.belongsTo(this.user);
db.user.hasMany(this.messages);

module.exports = db;