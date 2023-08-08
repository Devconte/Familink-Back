const multer = require('multer');
const logger = require('./logger');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './app/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const filter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/jpg'
    || file.mimetype === 'image/png'
    || file.mimetype === 'image/gif'
  ) {
    logger.info('Upload Middleware : success');
    cb(null, true);
  } else {
    cb(null, false);
    logger.error('Upload Middleware : Unauthorized filetype');
    cb(new Error('Unauthorized filetype'));
  }
};

const uploadMiddleware = multer({
  storage: fileStorage,
  fileFilter: filter,
  limits: { fileSize: 2 * 1024 * 1024 },
}).single('image');

module.exports = uploadMiddleware;
