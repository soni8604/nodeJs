const express = require("express");
const User = require("../modules/user");
const { body, validationResult } = require('express-validator');
const router = express.Router();
//1. Fetch/Read the data 
router.get("/", async (req, res) => {
    // Write the code for fetch
    const users = await User.find();
    res.json({
        status: "Success",
        users
    })
});

// Create data 
router.post("/" , body("email").isEmail(), body("name").isAlpha(), async (req, res) => {
    // Write the code for fetch
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const users = await User.create(req.body);
        res.json({
            status: "Success",
            users
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

// update data 
router.put("/:id", async (req, res) => {
    // Write the code for fetch
    try {
        console.log(req.query);
        const users = await User.updateOne({_id: req.params.id},
             {age: req.body.age, maritalStatus: req.body.maritalStatus}, 
             {runValidators:true });
        res.json({
            status: "Success",
            users
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

// Create data 
router.delete("/:id", async (req, res) => {
    // Write the code for fetch
    try {
        const users = await User.deleteOne({_id: req.params.id});
        res.json({
            status: "Success",
            users
        })

    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

});

module.exports = router;