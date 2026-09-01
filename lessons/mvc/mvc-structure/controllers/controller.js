exports.homePage = (req, res) => {
    res.send("Welcome to the Home Page");
};

exports.aboutPage = (req, res) => {
    res.send("Welcome to the About Page");
};
// Alternative method of writing the function
const anotherHomePage = (req, res) => {
    res.send("This is another home page using conventional arrow function");
};

exports.anotherHomePage = anotherHomePage;
