const express = require('express'); // import express library
const app = express(); //Initialize express
const cors = require('cors'); //import cors module
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080; //create a listerning port number
const server = require('http').createServer(app);

app.use(cors());
app.use(express.json());  // to support JSON-encoded+
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

require('./socket')(server)

const db = require('./App/Models');

db.sequelize.authenticate({force: false })
    .then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log("Failed to connect to DB: ", err);
    })



app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Chat app server");
});

const user = require("./App/Routes/getAllUsers.routes");
const getid = require("./App/Routes/getOneUser.routes");

app.use("/api", user);
app.use("/api", getid);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
})