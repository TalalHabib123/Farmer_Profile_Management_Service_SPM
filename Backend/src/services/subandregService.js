const axios = require('axios');

const SUBSIDYANDREG_SERVICE_URL = process.env.SUBSIDYANDREG_SERVICE_URL;

exports.getAllSubsidies = async (GovOffID) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/subsidies/${GovOffID}/all`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getSubsidyById = async (subsidyId) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/subsidies/${subsidyId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getAllRegulations = async (FarmerID) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/regulations/${FarmerID}/all`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getRegulationById = async (regulationId) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/regulations/${regulationId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getAllLoanApplications = async (FarmerID) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/loanapplications/${FarmerID}/all`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getLoanApplicationById = async (loanApplicationId) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/loanapplications/${loanApplicationId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getAllSubsidyApplications = async (FarmerID) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/subsidyapplications/${FarmerID}/all`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

exports.getSubsidyApplicationById = async (subsidyApplicationId) => {
    try {
        const response = await axios.get(`${SUBSIDYANDREG_SERVICE_URL}/subsidyapplications/${subsidyApplicationId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

