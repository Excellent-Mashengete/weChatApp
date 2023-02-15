const express = require("express");
const router = express.Router();

const messages = require('../Controllers/getmessages');

router.post("/messages", messages.getMessages);
router.post("/sendmessags", messages.sendMessags);
module.exports = router;