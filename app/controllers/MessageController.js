const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const MessageDataMapper = require('../models/MessageDataMapper');

class MessageController extends CoreController {
  static dataMapper = MessageDataMapper;

  constructor() {
    super();
    logger.info(
      'Message Controller created',
    );
  }
}

module.exports = new MessageController();
