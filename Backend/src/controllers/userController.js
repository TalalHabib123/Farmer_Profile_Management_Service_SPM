// controllers/userController.js
const databaseService = require('../services/databaseService');
const {
  validateUser,
} = require('../utils/validationMiddleware');

const userController = {
  createUser: async (req, res, next) => {
    try {
      const { ...userData } = req.body;
      // Validate common user data
      validateUser(req.body);

      const user = await databaseService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  updatePersonalDetail: async (req, res, next) => {
    try {
      const updatedUser = await databaseService.updateUserPersonalDetails(req.params.userId, req.body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await databaseService.getUserById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      // Validate updates based on role
      validateUser(req.body, false); // Allow partial updates

      const updatedUser = await databaseService.updateUser(req.params.userId, req.body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      await databaseService.deleteUser(req.params.userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  listUsers: async (req, res, next) => {
    try {
      const users = await databaseService.listUsers(req.query);
      res.json(users);
    } catch (error) {
      next(error);
    }
  },

  getUserPreferences: async (req, res, next) => {
    try {
      const user = await databaseService.getUserById(req.params.userId);
      if (!user || !user.preferences) {
        return res.status(404).json({ error: 'Preferences not found' });
      }
      res.json(user.preferences);
    } catch (error) {
      next(error);
    }
  },

  updateUserPreferences: async (req, res, next) => {
    try {
      const updatedPreferences = await databaseService.updateUserPreferences(
        req.params.userId,
        req.body
      );
      res.json(updatedPreferences);
    } catch (error) {
      next(error);
    }
  },

  deleteUserPreferences: async (req, res, next) => {
    try {
      let user = await databaseService.getUserById(req.params.userId);
      if (!user || !user.preferences) {
        return res.status(404).json({ error: 'Preferences not found' });
      }
      user.preferences = undefined;
      await databaseService.updateUser(req.params.userId, user);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
