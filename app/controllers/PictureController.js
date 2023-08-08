const logger = require('../helpers/logger');

const CoreController = require('./CoreController');
const PictureDataMapper = require('../models/PictureDataMapper');

class PictureController extends CoreController {
  static dataMapper = PictureDataMapper;

  constructor() {
    super();
    logger.info('Picture Controller created');
  }

  // async getOnePicture(req, res) {
  //   // router.get(/picture/:url) <== vous pouvez le sécuriser avec une regex
  //   // créer une route paramétré en regex qui accepte seulement les urls sous un format précis
  //   //const url = req.params.url;
  //   //vérifier que le fichier existe en bdd
  //   // si oui streamer la réponse!
  //   await fs.createReadStream(path.join(__dirname, '/images/${url}')).pipe(res);
  //   return this;
  // }
}

module.exports = new PictureController();
