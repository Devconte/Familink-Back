require('dotenv').config();
const path = require('path');
const { createLogger, format, transports } = require('winston');

const chalk = require('chalk');

const environment = process.env.NODE_ENV || 'development';

const transportTypeDev = [new transports.Console({ level: 'info' })];

const transportTypeProd = [new transports.File({ filename: path.resolve(__dirname, '..', '..', 'logfiles', 'error.log'), level: 'error' }), new transports.File({ filename: path.resolve(__dirname, '..', '..', 'logfiles', 'combined.log') })];

/* if environment = development => winston display the debugs in console,
if environment = production =>  logging is written to the error.log and/or combined.log files */
const transportType = environment === 'development' ? transportTypeDev : transportTypeProd;

// assign a color according to the raising of the message
function getLevelColor(level) {
  switch (level) {
    case 'error':
      return chalk.red;
    case 'warn':
      return chalk.yellow;
    case 'info':
      return chalk.green;
    case 'debug':
      return chalk.blue;
    default:
      return chalk.white;
  }
}

const myFormat = format.printf(({ level, message, timestamp }) => {
  const formattedMessage = `[${getLevelColor(level)(level.toUpperCase())}] : ${message} - ${chalk.magenta(timestamp)}`;
  return formattedMessage;
});

const logger = createLogger({
  level: 'info',
  colorize: true,
  message: 'FamiLink log files',
  format: format.combine(
    format.simple(),
    format.timestamp({
      format: 'DD/MM/YYYY HH:mm:ss',
    }),
    myFormat,
  ),
  defaultMeta: { service: 'user-service' },
  transports: transportType,
});

module.exports = logger;
