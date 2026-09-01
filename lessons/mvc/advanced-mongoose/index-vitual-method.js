const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/Blog");
const Comment = require('./models/Comment')

mongoose
    .connect("mongodb://localhost:27017/advanced-mongoose")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", async (req, res) => {
    const blogs = await Blog.find({});
    res.json(blogs);
});

app.get("/comment/:commentId", async (req, res) => {
    const commentId = req.params.id
    const comment = await Blog.find({ "comments._id": commentId })
    res.json(comment)
})

app.post("/addBlogWithoutComments", async (req, res) => {
    const blogWithoutComments = new Blog({
        title: "New Blog without Comments",
        author: "Josh Doe",
        content: "Some new blog without comments inside",
    });
    await blogWithoutComments.save();
    res.status(201).json(blogWithoutComments);
});

app.post("/addComment", async (req, res) => {
    const newComment = new Comment({
        user: "Adam",
        content: "A comment with ObjectID Linking",
        votes: 5000,
        blog_id: "6a9648e4e4703ee31417e398"
    });
    await newComment.save();
    res.status(201).json(newComment);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
