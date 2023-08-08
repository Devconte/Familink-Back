const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');

class EventDataMapper extends CoreDataMapper {
  static tableName = 'event';

  static functionName = 'getall_events';

  constructor() {
    super();
    logger.info('Event dataMapper created');
  }
}

module.exports = new EventDataMapper();
