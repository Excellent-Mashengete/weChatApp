const express = require("express");
const router = express.Router();

const auth = require('../controllers/authenticate');

router.post("/verify", auth.verify); //verify the user 
router.post("/register", auth.register); //register new user
router.post("/login", auth.login); //login user

module.exports = router;