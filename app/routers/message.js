const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const MessageController = require('../controllers/MessageController');

const router = express.Router();

router.post(
  '/add',
  controllerHandler(MessageController.create.bind(MessageController)),
);
router.get(
  '/:id',
  controllerHandler(MessageController.getOne.bind(MessageController)),
);
router.delete(
  '/:id/delete',
  controllerHandler(MessageController.delete.bind(MessageController)),
);
router.patch(
  '/:id/update',
  controllerHandler(MessageController.update.bind(MessageController)),
);
router.get(
  '/family/:id',
  controllerHandler(MessageController.getAll.bind(MessageController)),
);

module.exports = router;
