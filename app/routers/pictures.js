const express = require('express');
const path = require('path');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const PictureController = require('../controllers/PictureController');

const router = express.Router();

router.get('/', (req, res) => {
  const filepath = path.join(__dirname, '..', 'views', 'index.html');
  res.sendFile(filepath);
});

router.post(
  '/add',
  controllerHandler(PictureController.create.bind(PictureController)),
);
router.get(
  '/:id',
  controllerHandler(PictureController.getOne.bind(PictureController)),
);
router.delete(
  '/:id/delete',
  controllerHandler(PictureController.delete.bind(PictureController)),
);
router.patch(
  '/:id/update',
  controllerHandler(PictureController.update.bind(PictureController)),
);
router.get(
  '/family/:id',
  controllerHandler(PictureController.getAll.bind(PictureController)),
);

module.exports = router;
