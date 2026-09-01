const { get } = require("../routes/routes");

const characters = [
    {
        id: 101,
        name: "Spider-Man",
        universe: "Marvel",
        powers: "Human-Arachnid Hybrid",
    },
    {
        id: 102,
        name: "The Hulk",
        universe: "Marvel",
        powers: "Super-strength",
    },
    {
        id: 103,
        name: "Jean Grey",
        universe: "Marvel",
        powers: "Omega-level Telepath",
    },
    {
        id: 201,
        name: "Superman",
        universe: "DC Comics",
        powers: "Kryptonian",
    },
    {
        id: 202,
        name: "Supergirl",
        universe: "DC Comics",
        powers: "Kryptonian",
    },
    {
        id: 203,
        name: "Batman",
        universe: "DC Comics",
        powers: "Rich",
    },
];

const getAllCharacters = (req, res) => {
    res.json(characters);
};

exports.getAllCharacters = getAllCharacters;

const getCharacterById = (req, res) => {
    const character = characters.find((char) => char.id == req.params.id);
    if (!character) {
        res.status(404).json({ result: `No character with ID ${req.params.id} found` });
    }
    res.json(character);
};

exports.getCharacterById = getCharacterById;
    