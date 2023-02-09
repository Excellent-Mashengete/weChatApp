const express = require('express'); // import express library
const app = express(); //Initialize express
const cors = require('cors'); //import cors module
const port = process.env.PORT || 8080; //create a listerning port number
const server = require('http').createServer(app);

app.use(cors());

require('./socket')(server)

const db = require('./App/Models');

db.sequelize.sync({force: true})
    .then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log("Failed to connect to DB: ", err);
    })



app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Chat app server");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
})