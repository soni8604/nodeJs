const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", async (req, res) => {
    try {
        const data = await marioModel.find()
        res.json({
            data
        })
    } catch (e) {
        res.json
            ({
                status: "failed",
                message: e.message
            })
    }
})
app.get("/mario/:id", async (req, res) => {
    try {
        const data = await marioModel.findById(req.params.id)
        res.json({
            data
        })
    } catch (e) {
        res.json
            ({
                status: "failed",
                message: e.message
            })
    }
})
app.post("/mario", async (req, res) => {
    try {
        const data = await marioModel.create(req.body)
        res.json({
            data
        })
    } catch (e) {
        res.json
            ({
                status: "failed",
                message: e.message
            })
    }
})

app.patch("/mario/:id", async (req, res) => {
    try {
        const data = await marioModel.updateMany({_id : req.params.id},req.body)
        res.json({
            status : "Success",
            result : data
        })
    } catch (e) {
        res.json
            ({
                status: "failed",
                message: e.message
            })
    }
})

app.delete("/mario/:id", async (req, res) => {
    try {
        const data = await marioModel.findByIdAndDelete(req.params.id)
        res.json({
            status : "Success",
            meassage : "character deleted"
        })
    } catch (e) {
        res.json
            ({
                status: "failed",
                message: e.message
            })
    }
})

module.exports = app;