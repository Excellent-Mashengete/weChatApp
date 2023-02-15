const express = require("express");
const router = express.Router();

const allUsers = require('../Controllers/getall.controller');

router.get("/users", allUsers.getUser);
router.get("/users/:sender_id", allUsers.getAllChatusers)

module.exports = router;