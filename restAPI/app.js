const express = require("express");
const mongoose = require("mongoose");
const User = require("./modules/user");
const bodyparser = require("body-parser");
const { body, validationResult} = require('express-validator');
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const postRoutes = require("./routes/posts");
mongoose.connect("mongodb://localhost/restapi");
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";


const app = express();

app.use(express.json())


app.use("/api/v1/posts", async (req, res, next) => {
    console.log(req.headers.authorization);
    if(req.headers.authorization){
        const token = req.headers.authorization.split("test ")[1];
        console.log(token);
        
        jwt.verify(token, secret, async function(err, decoded) {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: "Not Authenticated"
                })
            }
            const user = await User.findOne({_id: decoded.data});
            req.user = user._id;
            next();
          });
    }else {
       return  res.status(500).json({
            status: "failed",
            message: "Invalid token"
        })
    }
});


app.use("/api/v1/users", userRoutes);
app.use("/api/v1", loginRoutes);
app.use("/api/v1/posts", postRoutes);

app.get("*", (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})
app.listen(5000, () => console.log("The server is up at 5000 port"));
