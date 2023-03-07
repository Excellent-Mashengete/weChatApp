
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
      type: Sequelize.TEXT
    },
    description:{
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING,
    },  
  });

  return Users;
};