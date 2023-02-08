const express = require('express'); // import express library
const cors = require('cors'); //import cors module
const app = express(); //Initialize express
const bodyParser = require('body-parser');
const server = require('http').createServer(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
});

require('./App/Config/dotenv.config')

app.use(express.json());  // to support JSON-encoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

io.on("connection", (sockect) => {
    sockect.on("connected", (userID) => {
      users[userID] = sockect.id;
    });
})
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

//call our database connections file for postgre
const client = require('./App/Config/db.config')



// io.on("connection", (sockect) => {
//     sockect.on("connected", (userID) => {
//       users[userID] = sockect.id;
//     });
// })

const port = process.env.PORT || 8080; //create a listerning port number

app.get("/", (req, res) =>{
    res.status(200).send("Welcome to Chat app server");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}. http://localhost:${port}`) 
 })
