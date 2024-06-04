const express = require('express');
const router = express.Router();
const batikController = require('../controllers/batikController');

router.get('/', batikController.getAllBatiks);
router.get('/:id', batikController.getBatikById);

module.exports = router;