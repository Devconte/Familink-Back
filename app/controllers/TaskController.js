const logger = require('../helpers/logger');
const coreController = require('./CoreController');
const taskDataMapper = require('../models/TaskDataMapper');

class TaskController extends coreController {
  static dataMapper = taskDataMapper;

  constructor() {
    super();
    logger.info(
      'TaskController is created',
    );
  }
}

module.exports = new TaskController();
