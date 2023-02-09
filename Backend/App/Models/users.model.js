const {Messages} = require(".");

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

  // Users.hasMany(Messages, {foreignKey: 'userId'});
  Users.hasMany(Messages,{as: 'fotos', foreignKey: 'userId'})
  return Users;
};