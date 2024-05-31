const express = require("express");
const router = express.Router();
const newUser = require("../Controller/User/newUser");
const login = require("../Controller/User/login");

// add model details
router.post("/create_user", newUser);

// fetch model details

router.post("/login", login);

module.exports = router;
