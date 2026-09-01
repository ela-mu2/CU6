const { Schema, model } = require("mongoose");
const Blog = require("./Blog");

const CommentSchema = new Schema({
    user: String,
    content: String,
    votes: Number,
    blog_id: {
        type: Schema.Types.ObjectId,
        ref: Blog,
    },
});

const Comment = model("Comment", CommentSchema);
module.exports = Comment;
