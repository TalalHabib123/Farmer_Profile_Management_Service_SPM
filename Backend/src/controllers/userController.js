// controllers/userController.js
const databaseService = require('../services/databaseService');
const {
  validateUser,
  validateFarmerProfile,
  validateVendorProfile,
  validateSupplierProfile,
} = require('../utils/validationMiddleware');

exports.createUser = async (req, res, next) => {
  try {
    const { role } = req.body;
    // Validate common user data
    validateUser(req.body);

    // Validate role-specific data
    switch (role) {
      case 'Farmer':
        validateFarmerProfile(req.body);
        break;
      case 'Vendor':
        validateVendorProfile(req.body);
        break;
      case 'Supplier':
        validateSupplierProfile(req.body);
        break;
      default:
        return res.status(400).json({ error: 'Invalid role specified' });
    }

    // Create user with role-specific data
    const user = await databaseService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await databaseService.getUserById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const existingUser = await databaseService.getUserById(req.params.userId);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { role } = existingUser;

    // Validate updates based on role
    validateUser(req.body, false); // Allow partial updates
    switch (role) {
      case 'Farmer':
        validateFarmerProfile(req.body, false);
        break;
      case 'Vendor':
        validateVendorProfile(req.body, false);
        break;
      case 'Supplier':
        validateSupplierProfile(req.body, false);
        break;
      default:
        return res.status(400).json({ error: 'Invalid role specified' });
    }

    const updatedUser = await databaseService.updateUser(req.params.userId, req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await databaseService.deleteUser(req.params.userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const users = await databaseService.listUsers(req.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserPreferences = async (req, res, next) => {
  try {
    const user = await databaseService.getUserById(req.params.userId);
    if (!user || !user.preferences) {
      return res.status(404).json({ error: 'Preferences not found' });
    }
    res.json(user.preferences);
  } catch (error) {
    next(error);
  }
};

exports.updateUserPreferences = async (req, res, next) => {
  try {
    const updatedPreferences = await databaseService.updateUserPreferences(
      req.params.userId,
      req.body
    );
    res.json(updatedPreferences);
  } catch (error) {
    next(error);
  }
};
