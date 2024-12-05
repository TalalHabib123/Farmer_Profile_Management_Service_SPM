const axios = require('axios');

const SUPPLYCHAIN_SERVICE_URL = process.env.DATABASE_SERVICE_URL;

// Helper function to handle errors
const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
    } else {
        throw new Error('Database Service Error');
    }
};

exports.getAllProducts = async (SupplierID) => {
    try {
        const response = await axios.get(`${SUPPLYCHAIN_SERVICE_URL}/products/${SupplierID}/all`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getProductById = async (productID) => {
    try {
        const response = await axios.get(`${SUPPLYCHAIN_SERVICE_URL}/products/${productID}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};
