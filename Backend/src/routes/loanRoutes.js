// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.get('/', loanController.getLoanApplications);
router.post('/', loanController.createLoanApplication);
router.get('/:loanId', loanController.getLoanApplicationById);
router.put('/:loanId', loanController.updateLoanApplication);
router.delete('/:loanId', loanController.deleteLoanApplication);

module.exports = router;