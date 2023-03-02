const express = require("express");
const router = express.Router();

const mess = require('../controllers/getmessages');

router.get("/gmessages/:id", mess.groupmessages); //get group messages
router.post("/gmessages", mess.singlemess); //get single message
router.post("/postindividual", mess.sendtoone); //post one-on-one message
router.post("/postgroup", mess.sendtogroup); //post group messages

module.exports = router;