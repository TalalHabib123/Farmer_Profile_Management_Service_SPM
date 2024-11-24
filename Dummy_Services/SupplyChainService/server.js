const express = require("express");
const app = express();
const PORT = 4000;

const dummyProducts = [
    {
        _id: "63f1a7f1b3b5c63f1a7f1b3b",
        productName: "High-Quality Wheat Seeds",
        category: "Seed",
        details: {
            description: "Premium wheat seeds for high-yield crops.",
            unit: "kg",
            specifications: ["Non-GMO", "High Germination Rate"],
            price: 150,
            quantity: 100,
        },
        images: ["https://example.com/images/wheat-seeds.jpg"],
        location: "Texas, USA",
        availabilityStatus: "in_stock",
        supplier: "63f1a7f1b3b5c63f1a7f1c2a",
        createdAt: "2024-11-24T10:00:00Z",
        updatedAt: "2024-11-24T12:00:00Z",
    },
    {
        _id: "63f1a7f1b3b5c63f1a7f1b4c",
        productName: "Organic Pesticide",
        category: "Pesticide",
        details: {
            description: "Safe and effective pesticide for organic farming.",
            unit: "litre",
            specifications: ["Eco-Friendly", "Non-Toxic"],
            price: 250,
            quantity: 50,
        },
        images: ["https://example.com/images/organic-pesticide.jpg"],
        location: "California, USA",
        availabilityStatus: "in_stock",
        supplier: "63f1a7f1b3b5c63f1a7f1c2b",
        createdAt: "2024-11-23T09:00:00Z",
        updatedAt: "2024-11-24T10:00:00Z",
    },
];

// Dummy data
const products = dummyProducts;

// Get all products by Supplier ID
app.get("/products/:supplierId/all", (req, res) => {
    const supplierId = req.params.supplierId;

    // Filter products by supplier ID
    const filteredProducts = products.filter(
        (product) => product.supplier === supplierId
    );

    res.json(filteredProducts);
});

// Get product by Product ID
app.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;

    // Find product by ID
    const product = products.find((product) => product._id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Product not found" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Dummy microservice running on port ${PORT}`);
});
