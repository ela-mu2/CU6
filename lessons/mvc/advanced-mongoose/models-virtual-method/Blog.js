const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
    {
        title: String,
        author: String,
        content: String,
    },
    {
        // 1. Tell Mongoose to include virtual fields when converting data to JSON
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

BlogSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "blog_id",
});

const Blog = model("Blog", BlogSchema);
module.exports = Blog;
