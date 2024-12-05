const govoffController = require('../controllers/govoffController');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(govoffController.getAllGovOffProfiles)
    .post(govoffController.createGovOffProfile);

router.route('/:userId')
    .get(govoffController.getGovOffProfile)
    .put(govoffController.updateGovOffProfile)
    .delete(govoffController.deleteGovOffProfile);

router.route('/:userId/subsidies')
    .get(govoffController.getCreatedSubsidies);

router.route('/:userId/department')
    .get(govoffController.getGovOffDepartment);
    
module.exports = router;