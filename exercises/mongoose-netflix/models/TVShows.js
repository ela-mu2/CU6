const { Schema, model } = require("mongoose");

const tvShowSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    premiere_year: {
        type: Number,
        required: true,
    },
    end_year: {
        type: Number,
        required: false,
    },
    seasons: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
});

const TVShow = model("TVShow", tvShowSchema);
module.exports = TVShow;
