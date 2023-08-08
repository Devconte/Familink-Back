const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');

class FamilyDataMapper extends CoreDataMapper {
  static tableName = 'family';

  static functionName = 'getalldata_from_family';

  constructor() {
    super();
    logger.info('Family dataMapper created');
  }
}

module.exports = new FamilyDataMapper();
