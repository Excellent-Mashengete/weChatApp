module.exports = (sequelize, Sequelize) => {
    const Group_Message = sequelize.define("group_message", {
      group_name: {
        type: Sequelize.STRING
      },
      timestamps: true,
    });
  
    return Group_Message;
  };