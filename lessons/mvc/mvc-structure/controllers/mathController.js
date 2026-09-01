const addAllNumbers = (req, res) => {
    let total = 0;
    const allNumbers = req.body;
    allNumbers.map((number) => {
        total += Number(number);
    });
    // res.send(`The total of all the numbers is ${total}`);
    res.json(`The total of all the numbers is ${total}`);
};

exports.addAllNumbers = addAllNumbers;

const multiplyAllNumbers = (req, res) => {
    let total = 1;
    const allNumbers = req.body;
    allNumbers.map((number) => {
        total *= Number(number);
    });
    // res.send(`The product of all the numbers is ${total}`);
    res.json(`The product of all the numbers is ${total}`);
};

exports.multiplyAllNumbers = multiplyAllNumbers;
