const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const ListDataMapper = require('../models/ListDataMapper');

class ListController extends CoreController {
  static dataMapper = ListDataMapper;

  constructor() {
    super();
    logger.info(
      'List Controller created',
    );
  }
}

module.exports = new ListController();
