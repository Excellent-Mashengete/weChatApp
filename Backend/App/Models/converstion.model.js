
module.exports = (sequelize, Sequelize) => {
  const Conversations = sequelize.define("conversations", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    }
  });

  // Conversations.belongsToMany(User, {through: GroupMembers});
  // Conversations.hasMany(Messages, {
  //   foreignKey: {
  //     name: "groupId",
  //     allowNull: false
  //   }
  // })

  return Conversations;
}
