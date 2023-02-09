const dbConfig = require("../Config/db.config");

const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(dbConfig.url);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./users.model.js")(sequelize, Sequelize);
db.Conversations = require("./converstion.model.js")(sequelize, Sequelize);
db.GroupMembers = require("./groupMembers.model.js")(sequelize, Sequelize);
db.Messages = require("./messages.model.js")(sequelize, Sequelize);


//Messages
//Sender
db.Users.hasMany(db.Messages, {foreignKey: 'user_id'});
db.Messages.belongsTo(db.Users, {foreignKey: 'user_id'});

//Receiver
db.Users.hasMany(db.Messages, {foreignKey: 'recipient_id', as: 'receipient'});
db.Messages.belongsTo(db.Users, {foreignKey: 'recipient_id', as: 'receipient'});


//GroupMembers
db.Users.hasMany(db.GroupMembers, {foreignKey: 'user_id'});
db.Conversations.hasMany(db.GroupMembers, {foreignKey: 'group_id'});
db.GroupMembers.belongsTo(db.Users, {foreignKey: 'user_id'});
db.GroupMembers.belongsTo(db.Conversations, {foreignKey: 'group_id'});

db.Conversations.hasMany(db.Messages, {foreignKey: 'group_id'});
db.Messages.belongsTo(db.Conversations, {foreignKey: 'group_id'});

module.exports = db;