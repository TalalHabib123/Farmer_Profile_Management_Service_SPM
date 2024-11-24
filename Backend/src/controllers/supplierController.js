const databaseService = require('../services/databaseService');
const supplychainService = require('../services/supplychainService');
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
  },

  getAllProducts: async (req, res, next) => {
    try {
      const orders = await supplychainService.getAllProducts(req.params.userId);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const order = await supplychainService.getProductById(req.params.orderId);
      res.json(order);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = supplierController;