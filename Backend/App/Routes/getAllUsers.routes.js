const express = require("express");
const router = express.Router();

const allUsers = require('../Controllers/getAll.controller');

router.get("/users", allUsers.getUser);

module.exports = router;