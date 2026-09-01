const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
    user: String,
    content: String,
    votes: Number,
});

const BlogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    comments: [CommentSchema],
});

const Blog = model("Blog", BlogSchema);
const Comment = model("Comment", CommentSchema);
