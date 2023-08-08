const logger = require('../../helpers/logger');
const CustomError = require('../../errors/CustomError');

const permissionMiddlware = (req, res, next) => {
  try {
    logger.info('permissionMiddlware');
    const { roleId } = req.auth;
    if (roleId === 2) {
      throw new CustomError(403, 'Forbidden', 'Forbidden access : no token found');
    }
    next();
  } catch (err) {
    logger.error(err);
    next(err);
  }
};

module.exports = permissionMiddlware;
