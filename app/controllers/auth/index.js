const jwt = require('jsonwebtoken');
const logger = require('../../helpers/logger');
const CustomError = require('../../errors/CustomError');

const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path:path.resolve(__dirname, "../../../.env" )
});

const UserDataMapper = require('../../models/UserDataMapper');

const {
  JWT_SECRET, JWT_REFRESH_SECRET, ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION, ACCESS_TOKEN_MAIL,
} = process.env;

const auth = {
  generateAccessToken(ip, user, isMail) {
    logger.info('generateAccessToken', ip, user);
    const expirationToken = isMail ? ACCESS_TOKEN_MAIL : ACCESS_TOKEN_EXPIRATION;
    return jwt.sign(
      {
        data: {
          ip,
          userId: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          pseudo: user.pseudo,
          familyId: user.family_id,
          email: user.email,
          role: user.role_id,
        },
      },
      JWT_SECRET,
      { expiresIn: expirationToken },
    );
  },

  generateRefreshToken(id) {
    logger.info('generateRefreshToken', id);
    return jwt.sign(
      { id },
      JWT_REFRESH_SECRET,
      {
        expiresIn: REFRESH_TOKEN_EXPIRATION,
      },
    );
  },

  async isValidRefreshToken(refreshToken) {
    try {
      logger.info('isValidRefreshToken');
      const decodedToken = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      const storedToken = await UserDataMapper.getRefreshToken(decodedToken.id);
      return refreshToken === storedToken;
    } catch (error) {
      logger.error(error);
      return false;
    }
  },

  async getTokenUser(_res, token, ip) {
    try {
      logger.info('getTokenUser :', ip);
      const decoded = jwt.verify(token, JWT_SECRET, { ignoreExpiration: true });
      if (decoded.data.ip === ip) {
        const user = await UserDataMapper.findByEmail(decoded.data.email);
        return user;
      }
      throw new CustomError(401, 'Unauthorized', 'Forbidden access : Token rejected');
    } catch (error) {
      logger.error(`${error}`);
      return false;
    }
  },
};

module.exports = auth;
