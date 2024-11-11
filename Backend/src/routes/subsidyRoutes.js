// routes/subsidyRoutes.js
const express = require('express');
const router = express.Router();
const subsidyController = require('../controllers/subsidyController');

router.get('/', subsidyController.getSubsidyApplications);
router.post('/', subsidyController.createSubsidyApplication);
router.get('/:applicationId', subsidyController.getSubsidyApplicationById);
router.put('/:applicationId', subsidyController.updateSubsidyApplication);
router.delete('/:applicationId', subsidyController.deleteSubsidyApplication);

module.exports = router;