const express = require('express');
const TaskController = require('../controllers/TaskController');
const controllerHandler = require('../controllers/helpers/controllerHandler');

const router = express.Router();

router.post('/add', controllerHandler(TaskController.create.bind(TaskController)));
router.get('/:id', controllerHandler(TaskController.getOne.bind(TaskController)));
router.patch('/:id/update', controllerHandler(TaskController.update.bind(TaskController)));
router.delete('/:id/delete', controllerHandler(TaskController.delete.bind(TaskController)));

module.exports = router;
