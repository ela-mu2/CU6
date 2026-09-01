// Array
let books = [
    { id: "b1", title: "Book One", description: "Description of book one", authorId: "a1" },
    { id: "b2", title: "Book Two", description: "Description of book two", authorId: "a2" },
];

let reviews = [
    { id: "r1", text: "Amazing book!", bookId: "b1" },
    { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
    { id: "a1", name: "Author One", bio: "Bio of Author One" },
    { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Book
const getAllBooks = (req, res) => {
    res.json(books);
};

exports.getAllBooks = getAllBooks;

const getBookById = (req, res) => {
    const book = books.find((book) => book.id == req.params.id);
    if (!book) {
        res.status(404).json({ result: `No character with ID ${req.params.id} found` });
    }
    res.json(book);
};

exports.getBookById = getBookById;

// Review
const getAllReviews = (req, res) => {
    res.json(reviews);
};

exports.getAllReviews = getAllReviews;

const getReviewById = (req, res) => {
    const review = reviews.find((review) => review.id == req.params.id);
    if (!review) {
        res.status(404).json({ result: `No character with ID ${req.params.id} found` });
    }
    res.json(review);
};

exports.getReviewById = getReviewById;

// Authors
const getAllAuthors = (req, res) => {
    res.json(authors);
};

exports.getAllAuthors = getAllAuthors;

const getAuthorById = (req, res) => {
    const author = authors.find((author) => author.id == req.params.id);
    if (!author) {
        res.status(404).json({ result: `No character with ID ${req.params.id} found` });
    }
    res.json(author);
};

exports.getAuthorById = getAuthorById;
