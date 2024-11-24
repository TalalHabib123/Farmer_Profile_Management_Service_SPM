const axios = require('axios');

const SUPPLYCHAIN_SERVICE_URL = process.env.SUPPLYCHAIN_SERVICE_URL;

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
