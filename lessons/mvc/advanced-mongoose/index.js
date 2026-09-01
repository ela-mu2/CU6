const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/Blog");
const Comment = require("./models/Comment");

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/advanced-mongoose")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/posts", async (req, res) => {
    const allBlogPosts = await Blog.find({}).populate("comments");
    res.json(allBlogPosts);
});

app.post("/post", async (req, res) => {
    const newBlogPost = new Blog(req.body);
    await newBlogPost.save();
    res.json(newBlogPost);
});

app.post("/post/:p_id/comment", async (req, res) => {
    const p_id = req.params.p_id;
    const newComment = new Comment(req.body);
    await newComment.save();
    // After you create the new comment, you need to add a link in the post data to link to the new comment
    const blogPost = await Blog.findOneAndUpdate({ _id: p_id }, { $push: { comments: newComment._id } }, { new: true });
    res.json(blogPost);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
