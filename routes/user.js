const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const Article = require(".././models/article");

//User login. Determine if admin, blogger, or basic user here
router.post("/login", (req, res) => {
    res.json({"working":"login route"})
});

module.exports = router;