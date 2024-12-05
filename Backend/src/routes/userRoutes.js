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

router.route('/:userId/preferences')
    .put(userController.updateUserPreferences)


module.exports = router;
