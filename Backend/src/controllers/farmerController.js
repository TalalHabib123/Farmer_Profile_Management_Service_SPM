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
      
  deleteFarmerProfile: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      await databaseService.deleteFarmerProfile(userId);
      res.status(204).end();
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

  getFarmerCreditScore: async (req, res, next) => {
    try {
      const farmer = await databaseService.getFarmerById(req.params.userId);
      const credit = farmer.creditScore;
      res.json(credit);
    } catch (error) {
      next(error);
    }
  },

  getFarmerThreshold: async (req, res, next) => {
    try {
      const farmer = await databaseService.getFarmerById(req.params.userId);
      const threshold = farmer.thresholds;
      if (!threshold) {
        res.status(404).json({ message: 'Threshold not found' });
        return;
      }
      res.json(threshold);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = farmerController;
