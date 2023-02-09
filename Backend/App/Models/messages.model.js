module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define("messages", {
      Sender: {
        type: Sequelize.INTEGER
      },
      messages: {
        type: Sequelize.TEXT
      },
      
    });
  
    return Messages;
  };