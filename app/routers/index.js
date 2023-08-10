const express = require('express');
const listRouter = require('./list');
const pictureRouter = require('./pictures');
const eventRouter = require('./event');
const messageRouter = require('./message');
const commentRouter = require('./comment');
const userRouter = require('./user');
const taskRouter = require('./task');
const familyRouter = require('./family');
const categoryRouter = require('./category');
const errorHandler = require('../errors/helper/errorHandler');

const auth = require('../controllers/auth/authMiddleware');

const router = express.Router();

router.use('/list', auth, listRouter);

router.use('/picture', auth, pictureRouter);

router.use('/event', auth, eventRouter);

router.use('/message', auth, messageRouter);

router.use('/comment', auth, commentRouter);

router.use('/task', auth, taskRouter);

router.use('/family', auth, familyRouter);

router.use('/category', categoryRouter);

router.use('/user', userRouter);

router.use(errorHandler);

module.exports = router;
