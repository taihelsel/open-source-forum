require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../config/passportConfig');
const mongoose = require("mongoose");
const User = require(".././models/user");

router.post("/test", (req, res) => {
    console.log("user test route hit");
});
module.exports = router;