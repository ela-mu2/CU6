// Schema Creation
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// This is the normal one
// const articleSchema = new Schema({
//     title: String,
//     content: String,
//     author: String,
//     publishedDate: Date
// })

// You can add Data Validation like this
const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
});

// Schema Middleware
articleSchema.pre("save", async function () {
    this.publishedDate = Date.now();
});

// Model Creation
const Article = model("Article", articleSchema);
module.exports = Article;
