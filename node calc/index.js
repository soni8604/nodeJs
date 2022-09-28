const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser())

app.get('/', function (req, res) {
    res.send("Hello World!");
})

function checkValue(num1, num2) {
    if (num1 == "" || num2 == "") {
        return false;
    }
    return true;
}

function validateDataType(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return true;
}


app.post('/add', (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (!checkValue(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "Please provide Input"
        })
    }

    if (!validateDataType(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid datatypes"
        })
    }
    if (Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json({
            status: "error",
            message: "Underflow"
        })

    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "Overflow"
        })
    }
    let result = Number(num1) + Number(num2)

    res.status(200).json({
        status: "Sucess",
        message: "the sum of given two numbers",
        sum: result
    })
});
app.post('/sub', (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (!checkValue(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "Please provide Input"
        })
    }

    if (!validateDataType(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid datatypes"
        })
    }
    let result = Number(num1) - Number(num2)
    if (Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json({
            status: "error",
            message: "Underflow"
        })

    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "Overflow"
        })
    }
    res.status(200).json({
        status : "Sucess",
        message: "the difference of given two numbers",
        difference : result
    })
})
app.post('/multiply', (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (!checkValue(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "Please provide Input"
        })
    }

    if (!validateDataType(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid datatypes"
        })
    }
    let result = Number(num1) * Number(num2)
    if (Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json({
            status: "error",
            message: "Underflow"
        })

    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "Overflow"
        })
    }
    res.status(200).json({
        status : "Sucess",
        message: "The product of given numbers",
        result : result
    })
})
app.post('/divide', (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (!checkValue(num1, num2)) {
        return res.status(400).json({
            status: "failure",
            message: "Please provide Input"
        })
    }

    if (!validateDataType(num1, num2)) {
        return res.status(400).json({
            status: "error",
            message: "Invalid datatypes"
        })
    }
    let result = Number(num1) / Number(num2)
    if (Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json({
            status: "error",
            message: "Underflow"
        })

    }
    if (Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json({
            status: "error",
            message: "Overflow"
        })
    }
    if (Number(num2) == 0) {
        return res.status(400).json({
            status: "error",
            message: "Divide by Zero"
        })
    }
    res.status(200).json({
        status : "Sucess",
        message: "The division of given numbers",
        result : result
    })
})



app.get("*", async (req, res) => {
    res.status(404).json({
        status : "Failed",
        message: "API NOT FOUND"
    })
})



app.listen(9000, () => console.log("The server is up at 9000 port"))