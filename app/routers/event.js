const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const EventController = require('../controllers/EventController');

const router = express.Router();

router.post(
  '/add',
  controllerHandler(EventController.create.bind(EventController)),
);
router.get(
  '/:id',
  controllerHandler(EventController.getOne.bind(EventController)),
);
router.delete(
  '/:id/delete',
  controllerHandler(EventController.delete.bind(EventController)),
);
router.patch(
  '/:id/update',
  controllerHandler(EventController.update.bind(EventController)),
);
router.get(
  '/family/:id',
  controllerHandler(EventController.getAll.bind(EventController)),
);

module.exports = router;
