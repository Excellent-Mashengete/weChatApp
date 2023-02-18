const express = require('express'); // import express library
const app = express(); //Initialize express
const cors = require('cors'); //import cors module
const bodyparser = require("body-parser");
const port = process.env.PORT || 8080; //create a listerning port number
const server = require('http').createServer(app);

app.use(cors({origin:"*"}));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

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

const user = require("./App/Routes/getallusers.routes");
const auth = require("./App/Routes/authenticate");
const message = require("./App/Routes/getmessages");

app.use("/api", user);
app.use("/api", auth);
app.use("/api", message);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
})