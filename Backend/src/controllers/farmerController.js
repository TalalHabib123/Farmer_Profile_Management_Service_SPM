const databaseService = require('../services/databaseService');
const subsidyandregService = require('../services/subandregService');
const validateFarmerProfile = require('../utils/validationMiddleware');

const farmerController = {
  createFarmerProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      // validateFarmerProfile(profileData);
      const farmerProfile = await databaseService.createFarmerProfile(profileData);
      res.status(201).json(farmerProfile);
    } catch (error) {
      next(error);
    }
  },

  updateFarmerProfile: async (req, res, next) => {
    try {
        const { ...updateData } = req.body;
        const userId = req.params.userId;
        const updatedFarmerProfile = await databaseService.updateFarmerProfile(userId, updateData);
        res.json(updatedFarmerProfile);
    } catch (error) {
      next(error);
    }
  },
      

  getFarmerByID: async (req, res, next) => {
    try {
      const farmer = await databaseService.getFarmerById(req.params.userId);
      res.json(farmer);
    } catch (error) {
      next(error);
    }
  },

  getAllFields: async (req, res, next) => {
    try {
      const profile = await databaseService.getFarmerById(req.params.userId);
      const fields = profile.farmDetails;
      res.json(fields);
    } catch (error) {
      next(error);
    }
  },

  getFieldById: async (req, res, next) => {
    try {
      const profile = await databaseService.getFarmerById(req.params.userId);
      const field = profile.farmDetails.farmLocation;
      res.json(field);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = farmerController;
