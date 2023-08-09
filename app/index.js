const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const logger = require('./helpers/logger');
const router = require('./routers');
const { swaggerSpec } = require('./helpers/swagger');
const uploadMiddleware = require('./helpers/upload');

const app = express();

app.set('trust proxy', true);

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(uploadMiddleware);
app.use(express.static('app/images'));

app.use((request, _, next) => {
  logger.info(`${request.method} ${request.url} - ${request.ip}`);
  next();
});
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', router);

module.exports = app;
