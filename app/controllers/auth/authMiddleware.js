const jwt = require('jsonwebtoken');
const logger = require('../../helpers/logger');
const CustomError = require('../../errors/CustomError');

const authMiddleware = (req, _res, next) => {
  try {
    logger.info('authMiddleware');
    const token = req.headers.authorization;
    if (!token || token === 'Bearer undefined') {
      throw new CustomError(401, 'Unauthorized', 'Forbidden access : no token found');
    }
    const decodedToken = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (decodedToken.data.ip === req.ip) {
      req.auth = {
        userId: decodedToken.data.userId,
        familyId: decodedToken.data.familyId,
        roleId: decodedToken.data.role,
      };
      next();
    } else {
      throw new CustomError(401, 'Unauthorized', 'Forbidden access: IP mismatch');
    }
  } catch (err) {
    logger.error(err);
    next(err);
  }
};

module.exports = authMiddleware;
