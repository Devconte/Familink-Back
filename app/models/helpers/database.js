const { Pool, types } = require('pg');
const logger = require('../../helpers/logger');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path:path.resolve(__dirname, "../../../.env" )
});

/* override node-postgres parser for the type date (1082)
and return the value without parsing it */
types.setTypeParser(1082, (value) => value);

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

pool.connect().then(() => {
  logger.info('Connected to database');
});

module.exports = pool;
