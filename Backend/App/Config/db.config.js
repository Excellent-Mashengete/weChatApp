// hosted
const {Client} = require("pg");
const client = new Client({
    connectionString: process.env.DB_Posgres
});

module.exports = client