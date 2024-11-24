const databaseService = require('../services/databaseService');
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
  }
};

module.exports = govoffController;