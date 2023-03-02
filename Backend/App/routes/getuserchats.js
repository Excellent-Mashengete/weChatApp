const express = require("express");
const router = express.Router();

const chats = require('../controllers/getallchats');

router.get("/getallchats/:id", chats.getallchats); //get all contacts

module.exports = router;