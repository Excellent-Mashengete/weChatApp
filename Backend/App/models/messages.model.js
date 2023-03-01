

module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define("chat_messages", {
    messages: {
      type: Sequelize.TEXT
    },
  });
  
  return Messages;
};