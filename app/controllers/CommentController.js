const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const CommentDataMapper = require('../models/CommentDataMapper');

class CommentController extends CoreController {
  static dataMapper = CommentDataMapper;

  constructor() {
    super();
    logger.info(
      'Comment Controller created',
    );
  }
}

module.exports = new CommentController();
