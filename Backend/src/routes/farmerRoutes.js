const farmerController = require('../controllers/farmerController');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(farmerController.createFarmerProfile);

router.route('/:userId/profile')
    .get(farmerController.getFarmerByID)
    .put(farmerController.updateFarmerProfile)
    .delete(farmerController.deleteFarmerProfile);

router.route('/:userId/fields')
    .get(farmerController.getAllFields);
router.route('/:userId/field_location')
    .get(farmerController.getFieldById);

router.route('/:userId/credit')
    .get(farmerController.getFarmerCreditScore);

router.route('/:userId/threshold')
    .get(farmerController.getFarmerThreshold);

module.exports = router;