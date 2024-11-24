const govoffController = require('../controllers/govoffController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(govoffController.createGovOffProfile);

router.route('/:userId/subsidies')
    .get(govoffController.getAllSubsidies);

router.route('/:userId/subsidies/:subsidyId')
    .get(govoffController.getSubsidyById);
    
module.exports = router;