const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const FamilyController = require('../controllers/FamilyController');
const permission = require('../controllers/auth/permissionMiddleware');

const router = express.Router();

router.post(
  '/add',
  permission,
  controllerHandler(FamilyController.create.bind(FamilyController)),
);
router.get(
  '/:id',
  controllerHandler(FamilyController.getAll.bind(FamilyController)),
);

router.delete(
  '/:id/delete',
  permission,
  controllerHandler(FamilyController.delete.bind(FamilyController)),
);
router.patch(
  '/:id/update',
  permission,
  controllerHandler(FamilyController.update.bind(FamilyController)),
);

module.exports = router;
