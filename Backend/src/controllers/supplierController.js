const databaseService = require('../services/databaseService');
const supplychainService = require('../services/supplychainService');
const validateSupplierProfile = require('../utils/validationMiddleware');

const supplierController = {
  createSupplierProfile: async (req, res, next) => {
    try {
      const { ...profileData } = req.body;
      // validateSupplierProfile(profileData);
      const supplierProfile = await databaseService.createSupplierProfile(profileData);
      res.status(201).json(supplierProfile);
    } catch (error) {
      next(error);
    }
  },

  updateSupplierProfile: async (req, res, next) => {
    try {
      const { ...updateData } = req.body;
      const supplierProfile = await databaseService.updateSupplierProfile(req.params.userId, updateData);
      res.json(supplierProfile);
    } catch (error) {
      next(error);
    }
  },

  getSupplierById: async (req, res, next) => {
    try {
      const supplierProfile = await databaseService.getSupplierById(req.params.userId);
      res.json(supplierProfile);
    } catch (error) {
      next(error);
    }
  },

  getAllSuppliers: async (req, res, next) => {
    try {
      const suppliers = await databaseService.getAllSupplierProfiles();
      res.json(suppliers);
    } catch (error) {
      next(error);
    }
  },

  deleteSupplierProfile: async (req, res, next) => {
    try {
      const supplierProfile = await databaseService.deleteSupplierProfile(req.params.userId);
      res.json(supplierProfile);
    } catch (error) {
      next(error);
    }
  },

  getAllProducts: async (req, res, next) => {
    try {
      let orders = await supplychainService.getAllProducts();
      orders = orders.filter((order) => order.supplier === req.params.userId);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = supplierController;