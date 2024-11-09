// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Routes
router.post('/', userController.createUser);
router.get('/', userController.listUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

// Preferences Routes
router.get('/:userId/preferences', userController.getUserPreferences);
router.put('/:userId/preferences', userController.updateUserPreferences);

module.exports = router;
