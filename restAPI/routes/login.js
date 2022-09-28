const express = require("express");
const User = require("../modules/user");
const Post = require("../modules/post");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const router = express.Router();
const secret = "RESTAPI";


router.post("/register", body("email").isEmail(), body("name").isAlpha(), body("password").isLength({
    min: 6,
    max: 16
}
), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        bcrypt.hash(password, 10, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: err.message
                })
            }
            const user = await User.create({
                name,
                email,
                password: hash
            });
            res.json({
                status: "sucess",
                message: "Registration successful"
            })
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        });
    }
});

router.post("/login", body("email"), body("password"),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const {email, password } = req.body;
            console.log(password);
            const data = await User.findOne({email});
            console.log(data.password);
            console.log(data);

            if(!data){
               return res.status(400).json({
                    status: "failed",
                    message : "User is not registerd"
                })
            }

            bcrypt.compare(password, data.password, function(err, result) {
                if (err) {
                    return res.status(500).json({
                        status: "failed",
                        message: err.message
                    })
                }

                if(result){
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: data._id
                      }, secret);

                      res.json({
                        status:  "Sucess",
                        token
                    });
                }


            });

        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: e.message
            });
        };
    });
module.exports = router;