const supplierController = require('../controllers/supplierController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(supplierController.createSupplierProfile);


module.exports = router;