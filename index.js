require('dotenv').config();
const http = require('http');
const logger = require('./app/helpers/logger');
const app = require('./app');

const port = process.env.PORT ?? 3000;
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Create server HTTP listenning on port: ${port} , ${process.env.NODE_ENV}`);
});
