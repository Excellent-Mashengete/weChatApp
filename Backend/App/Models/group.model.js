module.exports = (sequelize, Sequelize) => {
  const GroupMembers = sequelize.define("groupMembers", {
    
    joined_date: {
      type: Sequelize.DATE
    },
    left_date: {
      type: Sequelize.DATE
    },
  });

  return GroupMembers;
}
