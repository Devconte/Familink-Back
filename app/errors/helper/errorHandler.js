const logger = require('../../helpers/logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.info('error handler');
  if (err.message === 'jwt expired') {
    // eslint-disable-next-line no-param-reassign
    err.status = 401;
  }
  const status = err.status || 500;
  const responseJSON = {
    status: err.name,
    code: status,
    message: err.message,
  };
  if (process.env.NODE_ENV === 'development') {
    responseJSON.stack = err.stack;
  }

  res.status(status).json(responseJSON);
};

module.exports = errorHandler;
