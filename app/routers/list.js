const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const ListController = require('../controllers/ListController');
const permission = require('../controllers/auth/permissionMiddleware');

const router = express.Router();

router.post('/add', permission, controllerHandler(ListController.create.bind(ListController)));
router.get('/:id', controllerHandler(ListController.getOne.bind(ListController)));
router.delete('/:id/delete', permission, controllerHandler(ListController.delete.bind(ListController)));
router.patch('/:id/update', permission, controllerHandler(ListController.update.bind(ListController)));
router.get('/family/:id', controllerHandler(ListController.getAll.bind(ListController)));

module.exports = router;
