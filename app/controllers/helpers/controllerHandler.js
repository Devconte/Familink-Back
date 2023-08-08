const logger = require('../../helpers/logger');

function controllerHandler(controller) {
  logger.info(`create new controller with error handling for ${controller.name}`);
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      logger.error(`${error}`);
      next(error);
    }
  };
}

module.exports = controllerHandler;
