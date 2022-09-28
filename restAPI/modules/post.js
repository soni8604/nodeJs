const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : {type :String, required : true},
    body : {type: String, required : true, unique: true},
    user : {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps:true})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;