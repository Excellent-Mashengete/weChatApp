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
    },
    creator_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  });

  return Conversations;
}
