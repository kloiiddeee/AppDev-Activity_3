const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.get('/', itemController.home);
router.get('/about', itemController.about);
router.get('/services', itemController.services);
router.get('/contact', itemController.contact);
router.get('/products', itemController.products);

module.exports = router;