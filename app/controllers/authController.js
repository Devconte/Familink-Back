/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const logger = require('../helpers/logger');
const CustomError = require('../errors/CustomError');

const UserDataMapper = require('../models/UserDataMapper');
const auth = require('./auth');

const authController = {
  async login(req, res) {
    logger.info(`authController login, ${req.body}`);
    const { password, email } = req.body;
    if (!password || !email) {
      throw new CustomError(400, 'Bad Request', 'Incorrect email or password');
    }
    const user = await UserDataMapper.findByEmail(email);
    if (user.verified_email) {
      if (await bcrypt.compare(password, user.password)) {
        // return user without password
        const { password: loginPassword, refresh_token, ...userWithoutPassword } = user;
        return authController.sendTokens(res, req.ip, userWithoutPassword);
      }
    }
    throw new CustomError(403, 'Forbidden', 'Forbidden access');
  },

  async tokenRefresh(req, res) {
    const { refreshToken } = req.body;
    const authHeader = req.headers.authorization;
    if (!refreshToken && !authHeader) {
      logger.error(`Unauthorized  ${req.ip}`);
      throw new CustomError(401, 'Unauthorized', 'Forbidden access');
    }
    const isValidRefreshToken = await auth.isValidRefreshToken(refreshToken);
    if (isValidRefreshToken) {
      logger.info(`Token refresh, ip : ${req.ip}`);
      const token = authHeader.split(' ')[1];
      const user = await auth.getTokenUser(res, token, req.ip);
      return authController.sendTokens(res, req.ip, user, refreshToken);
    }
    throw new CustomError(401, 'Unauthorized', 'Forbidden access');
  },

  async sendTokens(res, ip, user, notExpiredRefreshToken) {
    logger.info(`Send access Token, ip : ${ip}`);
    const accessToken = auth.generateAccessToken(ip, user);
    let refreshToken = notExpiredRefreshToken;
    if (!notExpiredRefreshToken) {
      logger.info(`Send refresh Token, ip : ${ip}`);
      refreshToken = auth.generateRefreshToken(user.id);
      await UserDataMapper.setRefreshToken(user.id, refreshToken);
    }
    return res.status(200).json({
      status: 'success',
      data: {
        accessToken,
        refreshToken,
      },
    });
  },

  async resetPassword(req, res) {
    logger.info(`resetPassword, id : ${req.userId}`);
    const { password, passwordConfirmation, userId } = req.body;
    if (!password && !passwordConfirmation && !userId) {
      throw new CustomError(400, 'Bad Request', 'Password, passwordConfirmation and userId required');
    }
    if (password !== passwordConfirmation) {
      throw new CustomError(400, 'Bad Request', 'Password and password confirmation are not the same');
    }
    if (password.length < 8) {
      throw new CustomError(400, 'Bad Request', 'Password must be at least 8 characters');
    }
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const existingData = await UserDataMapper.findByPk(userId);
    existingData.password = hashedPassword;
    await UserDataMapper.update(userId, existingData);
    return res.status(204).send();
  },

};

module.exports = authController;
