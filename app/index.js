const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const logger = require('./helpers/logger');
const router = require('./routers');
const { swaggerSpec } = require('./helpers/swagger');
const uploadMiddleware = require('./helpers/upload');
const path = require('path');

const app = express();

app.set('trust proxy', true);

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(uploadMiddleware);
app.use(express.static('front_familink/dist'));
app.use(express.static('app/images'));

app.use((request, _, next) => {
  logger.info(`${request.method} ${request.url} - ${request.ip}`);
  next();
});
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', router);
 
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/home/student/Familink-Back/front_familink/dist', 'index.html'));
});

module.exports = app;
