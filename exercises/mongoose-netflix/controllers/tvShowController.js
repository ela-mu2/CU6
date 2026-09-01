const TVShow = require("../models/TVShows");

// exports.addTVShow = async (req, res) => {
//     const tvShowObject = {
//         title: req.body.title,
//         creator: req.body.creator,
//         premiere_year: req.body.premiere_year,
//         end_year: req.body.end_year,
//         seasons: req.body.seasons,
//         genre: req.body.genre,
//         rating: req.body.rating
//     }
//     console.log(tvShowObject)
//     console.log(req.body)
//     const tvShow = new TVShow({
//         title: req.body.title,
//         creator: req.body.creator,
//         premiere_year: req.body.premiere_year,
//         end_year: req.body.end_year,
//         seasons: req.body.seasons,
//         genre: req.body.genre,
//         rating: req.body.rating
//     })
//     // res.send("Hello")
//     // Insert the Article into your MongoDB Database
//     await tvShow.save()
//     res.json(tvShow)

// }
exports.addTVShow = async (req, res) => {
    console.log("Reach here");
    const tvShow = new TVShow(req.body);
    // Insert the Article into your MongoDB Database
    await tvShow.save();
    res.json(tvShow);
};

exports.showAllTVShows = async (req, res) => {
    try {
        // 1. Destructure potential query parameters from req.query
        const { genre, rating, premiere_year } = req.query;

        // 2. Initialize a dynamic filter object
        const filter = {};

        // 3. Add parameters only if they exist
        if (genre) {
            filter.genre = { $regex: genre, $options: "i" }; // Case-insensitive search
        }
        if (premiere_year) {
            filter.premiere_year = premiere_year;
        }
        if (rating) {
            filter.rating = { $gte: Number(rating) }; // Greater than or equal to
        }

        // 4. Pass the combined filter object to Mongoose
        const tvShows = await TVShow.find(filter);

        res.status(200).json(tvShows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.showTVShowByID = async (req, res) => {
    const id = req.params.id;
    const tvShow = await TVShow.findOne({ _id: id });
    res.json(tvShow);
};

exports.updateTVShow = async (req, res) => {
    const id = req.params.id;
    const updatedTVShow = await TVShow.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
    });
    res.json(updatedTVShow);
};

exports.deleteTVShow = async (req, res) => {
    const id = req.params.id;
    await TVShow.findOneAndDelete({ _id: id });
    // res.status(204).send("Deleted")
    res.json({ status: "deleted", deleted: true });
};
