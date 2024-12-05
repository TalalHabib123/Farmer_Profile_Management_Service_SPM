// services/databaseService.js
const axios = require('axios');

const DATABASE_SERVICE_URL = process.env.DATABASE_SERVICE_URL;

// Helper function to handle errors
const handleError = (error) => {
  if (error.response && error.response.data && error.response.data.error) {
    throw new Error(error.response.data.error);
  } else {
    throw new Error('Database Service Error');
  }
};

// User Services
exports.createUser = async (userData) => {
  try {
    const response = await axios.post(`${DATABASE_SERVICE_URL}/users/`, userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.createFarmerProfile = async (userId, profileData) => {
  try {
    const response = await axios.post(`${DATABASE_SERVICE_URL}/users/${userId}/farmer`, profileData);
    return response.data;
  }
  catch (error) {
    handleError(error);
  }
};

exports.createGovOffProfile = async (userId, profileData) => {
  try {
    const response = await axios.post(`${DATABASE_SERVICE_URL}/users/${userId}/govoff`, profileData);
    return response.data;
  }
  catch (error) {
    handleError(error);
  }
};

exports.createSupplierProfile = async (userId, profileData) => {
  try {
    const response = await axios.post(`${DATABASE_SERVICE_URL}/users/${userId}/supplier`, profileData);
    return response.data;
  }
  catch (error) {
    handleError(error);
  }
};

exports.getUserById = async (userId) => {
  try {
    const response = await axios.get(`${DATABASE_SERVICE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    handleError(error);
  }
};

exports.updateUser = async (userId, updateData) => {
  try {
    const response = await axios.put(`${DATABASE_SERVICE_URL}/users/${userId}`, updateData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.deleteUser = async (userId) => {
  try {
    await axios.delete(`${DATABASE_SERVICE_URL}/users/${userId}`);
    return true;
  } catch (error) {
    handleError(error);
  }
};

exports.listUsers = async (query) => {
  try {
    const response = await axios.get(`${DATABASE_SERVICE_URL}/users/`, { params: query });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.updateUserPreferences = async (userId, preferences) => {
  try {
    const response = await axios.put(`${DATABASE_SERVICE_URL}/users/${userId}/preferences`, preferences);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.getUserPreferences = async (userId) => {
  try {
    const response = await axios.get(`${DATABASE_SERVICE_URL}/users/${userId}/preferences`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.deleteUserPreferences = async (userId) => {
  try {
    await axios.delete(`${DATABASE_SERVICE_URL}/users/${userId}/preferences`);
    return true;
  } catch (error) {
    handleError(error);
  }
};

exports.getAllFarmerFields = async (FarmerID) => {
  try {
    const response = await axios.get(`${DATABASE_SERVICE_URL}/users/${FarmerID}/farmer/fields/all`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

exports.getFarmerFieldById = async (FarmerID, fieldID) => {
  try {
    const response = await axios.get(`${DATABASE_SERVICE_URL}/users/${FarmerID}/farmer/fields/${fieldID}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};