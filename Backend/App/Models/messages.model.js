

module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define("Messages", {
    messages: {
      type: Sequelize.TEXT
    },
  });
  
  return Messages;
};