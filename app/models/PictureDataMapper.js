const logger = require('../helpers/logger');

const CoreDataMapper = require('./CoreDataMapper');

class PictureDataMapper extends CoreDataMapper {
  static tableName = 'picture';

  static functionName = 'getall_pictures_with_comments';

  constructor() {
    super();
    logger.info('Picture dataMapper created');
  }
}

module.exports = new PictureDataMapper();
