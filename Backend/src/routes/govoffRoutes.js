const govoffController = require('../controllers/govoffController');
const express = require('express');
const router = express.Router();

router.route('/:userId/profile')
    .post(govoffController.createGovOffProfile);

module.exports = router;