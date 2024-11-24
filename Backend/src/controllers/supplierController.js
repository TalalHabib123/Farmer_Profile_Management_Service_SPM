const databaseService = require('../services/databaseService');
const validateSupplierProfile = require('../utils/validationMiddleware');

const supplierController = {
  createSupplierProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      validateSupplierProfile(profileData);

      const supplierProfile = await databaseService.createSupplierProfile(req.params.userId, profileData);
      res.status(201).json(supplierProfile);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = supplierController;