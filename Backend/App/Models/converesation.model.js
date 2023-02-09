module.exports = (sequelize, Sequelize) => {
  const Conversations = sequelize.define("conversations", {
    type: {
      type: Sequelize.ENUM('Individual', 'Group'),
      allowNull: false,
    }
  });

  return Conversations;
};