const express = require("express");
const User = require("../modules/user");
const Post = require("../modules/post");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const router = express.Router();
const secret = "RESTAPI";

router.get("/", async (req, res) => {
    const posts = await Post.find({user: req.user});
    res.json ({
        status: "Success",
        posts
    })

})

router.post("/", async (req, res) => {
    const posts = await Post.create({
        title : req.body.title,
        body : req.body.body,
        user : req.user
    });
    res.json ({
        status: "Success",
        posts
    })

})

module.exports = router;