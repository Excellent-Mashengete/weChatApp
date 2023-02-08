module.exports = (sequelize, Sequelize) => {
    const Group_Members = sequelize.define("group_members", {
      joined_date: {
        type: Sequelize.STRING
      },
      left_date: {
        type: Sequelize.STRING
      },
      timestamps: true,
    });
  
    return Group_Members;
  };