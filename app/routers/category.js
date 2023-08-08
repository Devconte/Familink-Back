const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

router.get('/all', controllerHandler(CategoryController.getAll.bind(CategoryController)));

module.exports = router;
