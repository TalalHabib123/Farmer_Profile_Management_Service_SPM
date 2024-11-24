const express = require("express");
const app = express();
const PORT = 4002;

const dummyUsers = [
    {
        userId: "63f1a7f1b3b5c63f1a7f1b3a",
        username: "john_doe",
        password: "hashed_password_123",
        roles: ["Farmer"],
        status: "active",
        failedLoginAttempts: 0,
        lastLogin: "2024-11-23T10:00:00Z",
        personalDetails: {
            firstName: "John",
            lastName: "Doe",
            contactInfo: {
                email: "john.doe@example.com",
                phone: "1234567890",
            },
            address: "123 Farm Lane, Springfield",
            businessDetails: {
                businessName: "John's Farm",
                businessType: "Agriculture",
            },
        },
        preferences: {
            notifications: true,
        },
        createdAt: "2024-11-20T10:00:00Z",
        updatedAt: "2024-11-21T10:00:00Z",
    },
];

const dummyFarmerProfiles = [
    {
        user: "63f1a7f1b3b5c63f1a7f1b3a",
        farmDetails: {
            farmLocation: {
                latitude: 36.7783,
                longitude: -119.4179,
                address: "Farm Road, California",
            },
            farmSize: 100,
            cropsGrown: ["Corn", "Wheat"],
            licenseCertifications: ["Organic Certified"],
        },
        creditScore: {
            score: 750,
            lastUpdated: "2024-10-01T10:00:00Z",
        },
        bankDetails: {
            accountNumber: "123456789012",
            bankName: "Farmers Bank",
            accountHolder: "John Doe",
        },
        createdAt: "2024-11-20T10:00:00Z",
        updatedAt: "2024-11-21T10:00:00Z",
    },
];

const dummyGovernmentOfficials = [
    {
        user: "63f1a7f1b3b5c63f1a7f1c2a",
        department: "Agriculture Department",
        createdAt: "2024-11-20T10:00:00Z",
        updatedAt: "2024-11-21T10:00:00Z",
    },
];

const dummySupplierProfiles = [
    {
        user: "63f1a7f1b3b5c63f1a7f1c2b",
        logistics: {
            deliveryAreas: ["California", "Nevada"],
            averageDeliveryTime: 48, // in hours
        },
        createdAt: "2024-11-20T10:00:00Z",
        updatedAt: "2024-11-21T10:00:00Z",
    },
];

const dummyFields = [
    {
        _id: "63f1a7f1b3b5c63f1a7f1d4a",
        farmer: "63f1a7f1b3b5c63f1a7f1b3a",
        location: {
            latitude: 36.7783,
            longitude: -119.4179,
            address: "Farm Road, California",
        },
        cropType: "Corn",
        size: 50, // in acres
        createdAt: "2024-11-20T10:00:00Z",
        updatedAt: "2024-11-21T10:00:00Z",
    },
];


// Dummy data
const users = dummyUsers;
const farmerProfiles = dummyFarmerProfiles;
const governmentOfficials = dummyGovernmentOfficials;
const supplierProfiles = dummySupplierProfiles;
const fields = dummyFields;

// User Endpoints
app.post("/users", (req, res) => {
    res.json({ ...users[0], message: "User created successfully" });
});

app.get("/users/:userId", (req, res) => {
    const user = users.find((u) => u.userId === req.params.userId);
    if (user) res.json(user);
    else res.status(404).json({ error: "User not found" });
});

app.put("/users/:userId", (req, res) => {
    res.json({ ...users[0], message: "User updated successfully" });
});

app.delete("/users/:userId", (req, res) => {
    res.json({ message: "User deleted successfully" });
});

app.get("/users", (req, res) => {
    res.json(users);
});

// Farmer Profile Endpoints
app.post("/users/:userId/farmer", (req, res) => {
    res.json({ ...farmerProfiles[0], message: "Farmer profile created successfully" });
});

app.get("/users/:userId/farmer/fields/all", (req, res) => {
    const farmerFields = fields.filter((field) => field.farmer === req.params.userId);
    res.json(farmerFields);
});

app.get("/users/:userId/farmer/fields/:fieldId", (req, res) => {
    const field = fields.find((f) => f._id === req.params.fieldId);
    if (field) res.json(field);
    else res.status(404).json({ error: "Field not found" });
});

// Government Official Profile Endpoints
app.post("/users/:userId/govoff", (req, res) => {
    res.json({ ...governmentOfficials[0], message: "Government official profile created successfully" });
});

// Supplier Profile Endpoints
app.post("/users/:userId/supplier", (req, res) => {
    res.json({ ...supplierProfiles[0], message: "Supplier profile created successfully" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Dummy microservice running on port ${PORT}`);
});
