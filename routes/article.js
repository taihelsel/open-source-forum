const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Article = require(".././models/article");

//getting article by id
router.post("/:id", (req, res) => {
    Article.findOne({ post_id: req.params.id }, function (err, post) {
        if (post) {
            return res.json(post);
        }
        else {
            return res.status(400).send({ error: true, message: 'Bad Request - Article does not exist' });
        }
    });
});

module.exports = router;