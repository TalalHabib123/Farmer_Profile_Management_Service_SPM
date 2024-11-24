const databaseService = require('../services/databaseService');
const subsidyService = require('../services/subandregService');
const validateGovOffProfile = require('../utils/validationMiddleware');

const govoffController = {
  createGovOffProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      validateGovOffProfile(profileData);
      const govOffProfile = await databaseService.createGovOffProfile(req.params.userId, profileData);
      res.status(201).json(govOffProfile);
    } catch (error) {
      next(error);
    }
  },

  getAllSubsidies: async (req, res, next) => {
    try {
      const subsidies = await subsidyService.getAllSubsidies(req.params.userId);
      res.json(subsidies);
    } catch (error) {
      next(error);
    }
  },

  getSubsidyById: async (req, res, next) => {
    try {
      const subsidy = await subsidyService.getSubsidyById(req.params.subsidyId);
      res.json(subsidy);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = govoffController;