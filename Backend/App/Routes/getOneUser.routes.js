const express = require("express");
const router = express.Router();

const oneUser = require('../Controllers/getUser.controller');

router.get("/oneUser", oneUser.getId);

module.exports = router;