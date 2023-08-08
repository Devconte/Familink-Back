const logger = require('../helpers/logger');
const CustomError = require('../errors/CustomError');

const deleteImage = require('../helpers/deleteUpload');

class CoreController {
  static dataMapper;

  async getAll(req, res) {
    logger.info(`${this.constructor.name} get all`);
    const familyId = Number(req.params.id);
    const results = await this.constructor.dataMapper.findAll(familyId);
    res.json({ status: 'success', data: { results } });
  }

  async getOne(req, res) {
    logger.info(`${this.constructor.name} get one`);
    const { id } = req.params;
    const result = await this.constructor.dataMapper.findByPk(id);
    if (!result) {
      throw new CustomError(404, 'Not found');
    }
    if (result.password) {
      delete result.password;
    }
    return res.json({ status: 'success', data: { result } });
  }

  async create(req, res) {
    logger.info(`${this.constructor.name} create`);
    const reqObject = { ...req.body };
    if (req.file) {
      reqObject.url = req.file.filename;
    }
    const result = await this.constructor.dataMapper.create(reqObject);
    return res.json({ status: 'success', data: { result } });
  }

  async update(req, res) {
    logger.info(`${this.constructor.name} update`);
    const { id } = req.params;
    const existingData = await this.constructor.dataMapper.findByPk(id);
    if (!existingData) {
      throw new CustomError(404, 'Not found');
    }
    const updatingData = {};
    Object.keys(existingData).forEach((key) => {
      if (
        key !== 'created_at'
        && key !== 'updated_at'
        && key !== 'id'
      ) {
        updatingData[key] = req.body[key] ?? existingData[key];
      }
    });
    await this.constructor.dataMapper.update(id, updatingData);
    return res.status(204).send();
  }

  async delete(req, res) {
    logger.info(`${this.constructor.name} delete`);
    const { id } = req.params;
    const existingData = await this.constructor.dataMapper.findByPk(id);
    if (!existingData) {
      throw new CustomError(404, 'Not found');
    }
    if (existingData.url) {
      deleteImage(existingData.url);
    }
    await this.constructor.dataMapper.delete(id);
    return res.status(204).json({ message: 'Deleted' });
  }
}

module.exports = CoreController;
