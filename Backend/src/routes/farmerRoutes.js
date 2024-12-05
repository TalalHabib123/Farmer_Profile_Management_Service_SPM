const farmerController = require('../controllers/farmerController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(farmerController.createFarmerProfile)
    .get(farmerController.getFarmerByID);

router.route('/:userId/fields')
    .get(farmerController.getAllFields);
router.route('/:userId/fields/:fieldId')
    .get(farmerController.getFieldById);

router.route('/:userId/regulations')
    .get(farmerController.getAllRegulations);
router.route('/:userId/regulations/:regulationId')
    .get(farmerController.getRegulationById);

router.route('/:userId/loanapplications')
    .get(farmerController.getAllLoanApplications);
router.route('/:userId/loanapplications/:loanApplicationId')
    .get(farmerController.getLoanApplicationById);

router.route('/:userId/subsidyapplications')
    .get(farmerController.getAllSubsidyApplications);
router.route('/:userId/subsidyapplications/:subsidyApplicationId')
    .get(farmerController.getSubsidyApplicationById);

module.exports = router;