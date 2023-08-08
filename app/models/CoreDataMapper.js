const logger = require('../helpers/logger');
const client = require('./helpers/database');

class CoreDataMapper {
  static tableName;

  static functionName;

  async findAll(familyId) {
    logger.info(`${this.constructor.name} findAll`);
    const preparedQuery = {
      text: `SELECT * FROM ${this.constructor.functionName}($1)`,
      values: [familyId],
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  }

  async findByPk(id) {
    logger.info(`${this.constructor.name} findByPk`);
    const preparedQuery = {
      text: `SELECT * FROM "${this.constructor.tableName}" WHERE id = ($1)`, // penser a double quote le nom de table pour user car mot réservé
      values: [id],
    };
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  async create(createObj) {
    logger.info(`${this.constructor.name} create`);
    const preparedQuery = {
      text: `SELECT * FROM create_${this.constructor.tableName}($1)`,
      values: [createObj],
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  }

  async update(id, modObject) {
    logger.info(`${this.constructor.name} update(${modObject})`);
    const modifiedTable = { ...modObject };
    modifiedTable.id = id;
    const preparedQuery = {
      text: `SELECT * FROM update_${this.constructor.tableName}($1)`,
      values: [modifiedTable],
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  }

  async delete(id) {
    logger.info(`${this.constructor.name} delete(${id})`);
    const preparedQuery = {
      text: `DELETE FROM "${this.constructor.tableName}" WHERE id = ($1)`,
      values: [id],
    };
    await client.query(preparedQuery);
  }
}

module.exports = CoreDataMapper;
