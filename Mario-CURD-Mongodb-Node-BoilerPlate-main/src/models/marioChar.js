const mongooose = require('mongoose');

//  Your code goes here
const marioSchema=new mongooose.Schema({
    Name: String,
    weight : Number
})

const marioModel=mongooose.model("testaroo",marioSchema)
module.exports = marioModel;