const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Article = require("./models/Articles");

const createNewArticle = async () => {
    const article = new Article({
        title: "New Article from Mongoose",
        content: "Content for the new Article from Mongoose",
        author: "John Doe",
        publishedDate: "2026-08-20",
    });
    // Insert the Article into your MongoDB Database
    await article.save();
};

const readOneArticle = async () => {
    const firstArticle = await Article.findOne({});
    console.log(firstArticle);
};
const readLastArticle = async () => {
    const firstArticle = await Article.findOne().sort({ _id: -1 });
    console.log(firstArticle);
};
const updateArticle = async () => {
    const article = await Article.findOne({});
    console.log(article);
    article.title = "Changed Article Title from Mongoose!";
    await article.save();
    console.log(article);
};
const deleteArticle = async () => {
    const article = await Article.deleteOne({ author: "John Doe" });
    console.log(article);
};

mongoose
    .connect("mongodb://localhost:27017/cms")
    .then(() => {
        console.log("MongoDB Connected");
        // createNewArticle()
        // readLastArticle()
        // updateArticle()
        deleteArticle();
    })
    .catch((err) => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
