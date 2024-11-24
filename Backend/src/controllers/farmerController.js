const databaseService = require('../services/databaseService');
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
  }
};

module.exports = farmerController;
