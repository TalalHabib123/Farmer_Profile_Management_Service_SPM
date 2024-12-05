const databaseService = require('../services/databaseService');
const subsidyandregService = require('../services/subandregService');
const validateFarmerProfile = require('../utils/validationMiddleware');

const farmerController = {
  createFarmerProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      validateFarmerProfile(profileData);
      const farmerProfile = await databaseService.createFarmerProfile(req.params.userId, profileData);
      res.status(201).json(farmerProfile);
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
      const fields = await databaseService.getAllFarmerFields(req.params.userId);
      res.json(fields);
    } catch (error) {
      next(error);
    }
  },

  getFieldById: async (req, res, next) => {
    try {
      const field = await databaseService.getFarmerFieldById(req.params.fieldId);
      res.json(field);
    } catch (error) {
      next(error);
    }
  },

  getAllRegulations: async (req, res, next) => {
    try {
      const regulations = await subsidyandregService.getAllRegulations(req.params.userId);
      res.json(regulations);
    } catch (error) {
      next(error);
    }
  },

  getRegulationById: async (req, res, next) => {
    try {
      const regulation = await subsidyandregService.getRegulationById(req.params.regulationId);
      res.json(regulation);
    } catch (error) {
      next(error);
    }
  },

  getAllLoanApplications: async (req, res, next) => {
    try {
      const loanApplications = await subsidyandregService.getAllLoanApplications(req.params.userId);
      res.json(loanApplications);
    } catch (error) {
      next(error);
    }
  },

  getLoanApplicationById: async (req, res, next) => {
    try {
      const loanApplication = await subsidyandregService.getLoanApplicationById(req.params.loanApplicationId);
      res.json(loanApplication);
    } catch (error) {
      next(error);
    }
  },

  getAllSubsidyApplications: async (req, res, next) => {
    try {
      const subsidyApplications = await subsidyandregService.getAllSubsidyApplications(req.params.userId);
      res.json(subsidyApplications);
    } catch (error) {
      next(error);
    }
  },

  getSubsidyApplicationById: async (req, res, next) => {
    try {
      const subsidyApplication = await subsidyandregService.getSubsidyApplicationById(req.params.subsidyApplicationId);
      res.json(subsidyApplication);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = farmerController;
