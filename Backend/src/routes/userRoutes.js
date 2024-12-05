// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
  .post(userController.createUser)
  .get(userController.listUsers);

router.route('/:userId')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/:userId/personal')
    .put(userController.updatePersonalDetail);

router.route('/:userId/preferences')
    .get(userController.getUserPreferences)
    .put(userController.updateUserPreferences)
    .delete(userController.deleteUserPreferences);


module.exports = router;
