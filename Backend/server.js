const express = require('express'); // import express library
const cors = require('cors'); //import cors module
const app = express(); //Initialize express
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080; //create a listerning port number

require('./App/Config/dotenv.config')

app.use(express.json());  // to support JSON-encoded
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());

//call our database connections file for postgre
const db = require('./App/Models');
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Chat app server");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
 })
