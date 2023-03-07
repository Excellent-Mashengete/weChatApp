module.exports =  (sequelize, Sequelize) => {
  const Messages = sequelize.define("chat_messages", {
    messages: {
      type: Sequelize.TEXT
    },
    read: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });  
  return Messages;
};

