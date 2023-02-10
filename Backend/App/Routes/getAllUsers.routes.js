const express = require("express");
const router = express.Router();

const allUsers = require('../Controllers/getAll.controller');

router.get("/users", allUsers.getUser);
router.get("/usersChats/:id", allUsers.getUserWithMessage);

module.exports = router;