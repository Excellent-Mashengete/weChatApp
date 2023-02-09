const Users  = require("./users.model");

module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define("Messages", {
    messages: {
      type: Sequelize.TEXT
    },
  });
  
  Messages.belongTo(Users);
  // Messages.belongTo(Conversations);
  
  return Messages;
};