const logger = require('../helpers/logger');
const CoreDataMapper = require('./CoreDataMapper');

class TaskDataMapper extends CoreDataMapper {
  static tableName = 'task';

  constructor() {
    super();
    logger.info('TaskDataMapper is created');
  }
}

module.exports = new TaskDataMapper();
