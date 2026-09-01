const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
    title: String,
    author: String,
    content: String,
});

const Blog = model("Blog", BlogSchema);
module.exports = Blog;
