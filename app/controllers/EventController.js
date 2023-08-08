const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const EventDataMapper = require('../models/EventDataMapper');

class EventController extends CoreController {
  static dataMapper = EventDataMapper;

  constructor() {
    super();
    logger.info(
      'Event Controller created',
    );
  }
}

module.exports = new EventController();
