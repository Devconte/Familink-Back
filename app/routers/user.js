const express = require('express');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const UserController = require('../controllers/UserController');
const authController = require('../controllers/authController');
const auth = require('../controllers/auth/authMiddleware');

const router = express.Router();

// bind is used to pass the class method as a reference, not call it directly
router.post('/signup', controllerHandler(UserController.create.bind(UserController)));
router.post('/login', controllerHandler(authController.login));
router.post('/refreshtoken', auth, controllerHandler(authController.tokenRefresh));
router.patch('/resetpassword', controllerHandler(authController.resetPassword));
router.get('/:id', auth, controllerHandler(UserController.getOne.bind(UserController)));
router.patch('/:id/update', auth, controllerHandler(UserController.update.bind(UserController)));
router.delete('/:id/delete', auth, controllerHandler(UserController.delete.bind(UserController)));
router.patch('/:userId/assignto/:familyId', auth, controllerHandler(UserController.asign_user_to_family.bind(UserController)));
router.get('/verify/:token', controllerHandler(UserController.verifyEmailUser.bind(UserController)));
router.post('/sendresetpassword', controllerHandler(UserController.sendResetEmailPassword.bind(UserController)));

module.exports = router;
