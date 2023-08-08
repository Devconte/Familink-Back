const logger = require('../helpers/logger');
const client = require('./helpers/database');

const CoreDataMapper = require('./CoreDataMapper');

class CategoryDataMapper extends CoreDataMapper {
  static tableName = 'category';

  async findAll() {
    logger.info(`${this.constructor.name} findAll OK`);
    const preparedQuery = {
      text: `SELECT * FROM "${this.constructor.tableName}"`,
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  }

  constructor() {
    super();
    logger.info('Category dataMapper created');
  }
}

module.exports = new CategoryDataMapper();
