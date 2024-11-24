const farmerController = require('../controllers/farmerController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(farmerController.createFarmerProfile);

module.exports = router;