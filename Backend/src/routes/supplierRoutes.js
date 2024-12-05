const supplierController = require('../controllers/supplierController');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(supplierController.getAllSuppliers)
    .post(supplierController.createSupplierProfile);

router.route('/:userId')
    .get(supplierController.getSupplierById)
    .put(supplierController.updateSupplierProfile)
    .delete(supplierController.deleteSupplierProfile);

router.route('/:userId/products')
    .get(supplierController.getAllProducts);


module.exports = router;