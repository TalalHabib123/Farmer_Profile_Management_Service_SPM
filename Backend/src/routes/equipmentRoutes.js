// routes/equipmentRoutes.js
const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.get('/', equipmentController.getEquipmentList);
router.post('/', equipmentController.createEquipment);
router.get('/:equipmentId', equipmentController.getEquipmentById);
router.put('/:equipmentId', equipmentController.updateEquipment);
router.delete('/:equipmentId', equipmentController.deleteEquipment);

module.exports = router;