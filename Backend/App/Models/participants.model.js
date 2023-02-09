module.exports = (sequelize, Sequelize) => {
    const Participants = sequelize.define("participants", {});
  
    return Participants;
  };