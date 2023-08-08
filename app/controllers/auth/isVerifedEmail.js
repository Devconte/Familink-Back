const logger = require('../../helpers/logger');
const dataMapper = require('../../models/UserDataMapper');

const isVerifiedEmail = async (userId) => {
  logger.info('isVerifiedEmail');
  try {
    const result = await dataMapper.findByPk(userId);
    return result.verified_email;
  } catch (error) {
    logger.error(error);
    return false;
  }
};

module.exports = isVerifiedEmail;
