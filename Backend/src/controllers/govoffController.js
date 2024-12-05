const databaseService = require('../services/databaseService');
const subsidyService = require('../services/subandregService');
const validateGovOffProfile = require('../utils/validationMiddleware');

const govoffController = {
  createGovOffProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      // validateGovOffProfile(profileData);
      const govOffProfile = await databaseService.createGovOffProfile(profileData);
      res.status(201).json(govOffProfile);
    } catch (error) {
      next(error);
    }
  },

  updateGovOffProfile: async (req, res, next) => {
    try {
      const { ...updateData } = req.body;
      const userId = req.params.userId;
      const updatedGovOffProfile = await databaseService.updateGovOffProfile(userId, updateData);
      res.json(updatedGovOffProfile);
    } catch (error) {
      next(error);
    }
  },

  deleteGovOffProfile: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      await databaseService.deleteGovOffProfile(userId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getGovOffProfile: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const govOffProfile = await databaseService.getGovProfById(userId);
      res.json(govOffProfile);
    } catch (error) {
      next(error);
    }
  },

  getAllGovOffProfiles: async (req, res, next) => {
    try {
      const govOffProfiles = await databaseService.getAllGovOffProfiles();
      res.json(govOffProfiles);
    } catch (error) {
      next(error);
    }
  },

  getCreatedSubsidies: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      let subsidies = await databaseService.getSubsidies();
      subsidies = subsidies.filter(subsidy => subsidy.createdBy === userId);
      res.json(subsidies);
    } catch (error) {
      next(error);
    }
  },

  getGovOffDepartment: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const govOffProfile = await databaseService.getGovProfById(userId);
      const department = govOffProfile.department;
      res.json(department);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = govoffController;