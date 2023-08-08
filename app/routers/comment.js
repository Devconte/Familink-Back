const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const CommentController = require('../controllers/CommentController');

const router = express.Router();

router.post(
  '/add',
  controllerHandler(CommentController.create.bind(CommentController)),
);
router.get(
  '/:id',
  controllerHandler(CommentController.getOne.bind(CommentController)),
);
router.delete(
  '/:id/delete',
  controllerHandler(CommentController.delete.bind(CommentController)),
);
router.patch(
  '/:id/update',
  controllerHandler(CommentController.update.bind(CommentController)),
);

module.exports = router;
