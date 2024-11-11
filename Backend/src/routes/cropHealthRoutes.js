// routes/cropHealthRoutes.js
const express = require('express');
const router = express.Router();
const cropHealthController = require('../controllers/cropHealthController');

// Crop Health Data Routes
router.get('/data', cropHealthController.getCropHealthData);
router.post('/data', cropHealthController.createCropHealthData);
router.get('/data/:dataId', cropHealthController.getCropHealthDataById);
router.put('/data/:dataId', cropHealthController.updateCropHealthData);
router.delete('/data/:dataId', cropHealthController.deleteCropHealthData);

// Field Routes
router.get('/fields', cropHealthController.getFields);
router.post('/fields', cropHealthController.createField);
router.get('/fields/:fieldId', cropHealthController.getFieldById);
router.put('/fields/:fieldId', cropHealthController.updateField);
router.delete('/fields/:fieldId', cropHealthController.deleteField);

module.exports = router;