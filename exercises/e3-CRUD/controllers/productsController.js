let products = [
    { id: 101, name: "Wireless Mouse", price: 79.9, stock: 25 },
    { id: 102, name: "Mechanical Keyboard", price: 199.0, stock: 10 },
    { id: 103, name: "USB-C Hub", price: 59.5, stock: 0 },
];

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    res.json(products.find((product) => product.id == req.params.id));
};

exports.addNewProduct = (req, res) => {
    products.push(req.body);
    res.json(products);
};

exports.updateProduct = (req, res) => {
    const updatedProduct = req.body;
    const updatedProducts = products.map((product) => {
        id = product.id;
        return product.id === Number(req.params.id) ? { id, ...updatedProduct } : product;
    });
    products = updatedProducts;
    res.json(products);
};

exports.deleteProduct = (req, res) => {
    const newProducts = products.filter((product) => product.id !== Number(req.params.id));
    products = newProducts;
    res.json(products);
};
