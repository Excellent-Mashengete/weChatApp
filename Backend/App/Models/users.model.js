module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cellphone: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    avatar: {
      type: Sequelize.TEXT,
    },
    lastseen:{
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  return Users;
};