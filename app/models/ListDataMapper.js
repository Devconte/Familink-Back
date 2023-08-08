const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');
// const client = require('./helpers/database');

class ListDataMapper extends CoreDataMapper {
  static tableName = 'list';

  static functionName = 'getAll_list_tasks';

  constructor() {
    super();
    logger.info('List dataMapper created');
  }
}

module.exports = new ListDataMapper();
