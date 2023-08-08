const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const CategoryDataMapper = require('../models/CategoryDataMapper');

class CategoryController extends CoreController {
  static dataMapper = CategoryDataMapper;

  constructor() {
    super();
    logger.info(
      'Category Controller created',
    );
  }
}

module.exports = new CategoryController();
