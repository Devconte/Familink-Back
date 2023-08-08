const logger = require('../helpers/logger');
const CoreDataMapper = require('./CoreDataMapper');
const client = require('./helpers/database');

class UserDataMapper extends CoreDataMapper {
  static tableName = 'user';

  async findByEmail(emailUser) {
    logger.info(`${this.constructor.name}, email :  ${emailUser}`);
    const preparedQuery = {
      text: 'SELECT * FROM "user" WHERE "email" = $1',
      values: [emailUser],
    };
    const registeredUser = await client.query(preparedQuery);
    return registeredUser.rows[0];
  }

  constructor() {
    super();
    logger.info('UserDataMapper created');
  }

  async asign_user_to_family(userId, familyId) {
    logger.info(
      ` ${this.constructor.name} asign_user_to_family, user : ${userId}  family : ${familyId}`,
    );
    const preparedQuery = {
      text: 'UPDATE "user" SET "family_id" = $1 WHERE "id" = $2',
      values: [familyId, userId],
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  }

  async setRefreshToken(userId, refreshToken) {
    logger.info(`${this.constructor.name} setRefreshToken, ${userId}`);
    const preparedQuery = {
      text: 'UPDATE "user" SET "refresh_token" = $1 WHERE "user"."id" = $2',
      values: [refreshToken, userId],
    };
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  async getRefreshToken(userId) {
    logger.info(`${this.constructor.name} getRefreshToken, ${userId}`);
    const preparedQuery = {
      text: 'SELECT "refresh_token" FROM "user" WHERE "id" = $1',
      values: [userId],
    };
    const result = await client.query(preparedQuery);
    return result.rows[0].refresh_token;
  }

  async confirmEmailUser(userId) {
    logger.info(`${this.constructor.name} verifyEmailUser ${userId}`);
    const preparedQuery = {
      text: 'UPDATE "user" SET "verified_email" = true WHERE "id" = $1',
      values: [userId],
    };
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }
}

module.exports = new UserDataMapper();
