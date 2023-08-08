const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const FamilyDataMapper = require('../models/FamilyDataMapper');

class FamilyController extends CoreController {
  static dataMapper = FamilyDataMapper;

  constructor() {
    super();
    logger.info(
      'Family Controller created',
    );
  }
}

module.exports = new FamilyController();
