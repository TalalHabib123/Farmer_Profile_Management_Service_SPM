const supplierController = require('../controllers/supplierController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(supplierController.createSupplierProfile);

router.route('/:userId/products')
    .get(supplierController.getAllProducts);
router.route('/:userId/products/:productId')
    .get(supplierController.getProductById);


module.exports = router;