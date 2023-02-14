const express = require("express");
const router = express.Router();

const auth = require('../Controllers/Authenticate');

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;