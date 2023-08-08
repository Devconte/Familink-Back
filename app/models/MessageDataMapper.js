const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');

class MessageDataMapper extends CoreDataMapper {
  static tableName = 'message';

  static functionName = 'getall_messages';

  constructor() {
    super();
    logger.info('Message dataMapper created');
  }
}

module.exports = new MessageDataMapper();
