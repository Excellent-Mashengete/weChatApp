
module.exports = (sequelize, Sequelize) => {
  const Conversations = sequelize.define("conversations", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    avatar: {
      type: Sequelize.TEXT,
    }
  });

  return Conversations;
}
