module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define("messages", {
      sender: {
        type: Sequelize.STRING
      },
      receiver: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
      isRead: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      timestamps: true,
    });
  
    return Messages;
  };