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

const addTwoNumbers = (req, res) => {
    const total = Number(req.body.num1) + Number(req.body.num2);
    // res.send({ status: "success", total: total });
    res.json({ status: "success", total: total });
};
exports.addTwoNumbers = addTwoNumbers;

const multiplyTwoNumbers = (req, res) => {
    const total = Number(req.body.num1) * Number(req.body.num2);
    // res.send(`The total of the two numbers is ${total}`);
    res.json(`The total of the two numbers is ${total}`);
};
exports.multiplyTwoNumbers = multiplyTwoNumbers;
