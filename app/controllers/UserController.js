/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('../helpers/logger');
const CoreController = require('./CoreController');
const UserDataMapper = require('../models/UserDataMapper');
const sendMails = require('../helpers/sendMails');
const auth = require('./auth');
const isVerifiedEmail = require('./auth/isVerifedEmail');
const CustomError = require('../errors/CustomError');
const confirmationEmailTemplate = require('../helpers/confirmEmailTemplate');
const resetPasswordEmailTemplate = require('../helpers/resetPasswordEmailTemplate');

class UserController extends CoreController {
  static dataMapper = UserDataMapper;

  constructor() {
    super();
    logger.info('UserController created');
  }

  async asign_user_to_family(req, res) {
    logger.info(`${this.constructor.name} asign_user_to_family`);
    const { userId, familyId } = req.params;
    // a basic verification before setting JOI
    if (!userId || !familyId) {
      throw new CustomError(400, 'Bad Request', 'Missing parameters');
    }
    await UserDataMapper.asign_user_to_family(userId, familyId);
    return res.status(204).send();
  }

  async create(req, res) {
    logger.info('Signup of a user using surchage of create method');
    const {
      pseudo,
      first_name,
      last_name,
      email,
      password,
      passwordConfirmation,
      role_id,
      family_id,
    } = req.body;

    if (
      !pseudo
      || !first_name
      || !last_name
      || !email
      || !password
      || !passwordConfirmation
    ) {
      throw new CustomError('Missing parameters', 400);
    }
    if (password !== passwordConfirmation) {
      throw new CustomError(400, 'Bad Request', 'Password and password confirmation are not the same');
    }
    if (password.length < 8) {
      throw new CustomError(400, 'Bad Request', 'Password must be at least 8 characters');
    }
    const isEmailExist = await UserDataMapper.findByEmail(email);
    if (isEmailExist) {
      throw new CustomError(400, 'Bad Request', 'Already used email');
    }

    // Par defaut l'user à un rôle_id à 2 si ce n'est pas précisé
    const role_id_default = !role_id ? 2 : role_id;

    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = await this.constructor.dataMapper.create({
      pseudo,
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role_id: role_id_default,
      family_id,
    });

    const token = auth.generateAccessToken(req.ip, createdUser, true);
    const emailTemplate = confirmationEmailTemplate(createdUser, token);
    sendMails(emailTemplate);
    return res.status(201).json({ status: 'success' });
  }

  async verifyEmailUser(req, res) {
    logger.info(`${this.constructor.name} verifyEmailUser`);
    const { token } = req.params;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // verifier que le mail n'est pas deja verifié
    const verifiedMail = await isVerifiedEmail(decodedToken.data.userId, res);
    if (verifiedMail) {
      logger.info(`Bad request : the email has already been verified ${verifiedMail}`);
      return res.status(400).redirect('https://michaeldutheil-server.eddi.cloud/');
    }
    await UserDataMapper.confirmEmailUser(decodedToken.data.userId);
    return res.redirect('https://michaeldutheil-server.eddi.cloud/');
  }

  async sendResetEmailPassword(req, res) {
    logger.info(`${this.constructor.name} sendResetEmailPassword`);
    const { email } = req.body;
    if (!email) {
      throw new CustomError(400, 'Bad Request', 'Missing email');
    }
    const user = await UserDataMapper.findByEmail(email);
    if (!user || !user.verified_email) {
      logger.info('Bad request : the user don\'t exist or the mail is not verified');
      return res.status(400).redirect('https://michaeldutheil-server.eddi.cloud/');
    }
    const token = auth.generateAccessToken(req.ip, user, true);
    const emailTemplate = resetPasswordEmailTemplate(user, token);
    sendMails(emailTemplate);
    return res.redirect('https://michaeldutheil-server.eddi.cloud/');
  }
}

module.exports = new UserController();
