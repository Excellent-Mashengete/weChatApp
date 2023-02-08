module.exports = {
    HOST: process.env.PGHOST,
    USER: process.env.postgres,
    PASSWORD: process.env.PGPASSWORD,
    DB: process.env.PGDATABASE,
    PORT: process.env.PGPORT,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

module.exports = {
    url: process.env.DB_Posgres
};