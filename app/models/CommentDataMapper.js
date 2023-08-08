const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');

class CommentDataMapper extends CoreDataMapper {
  static tableName = 'comment';

  constructor() {
    super();
    logger.info('Comment dataMapper created');
  }
}

module.exports = new CommentDataMapper();
