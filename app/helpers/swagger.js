const swaggerJSDoc = require('swagger-jsdoc');

const Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FamiLink API',
      VERSION: '1.0.0',
      description: 'FamiLink API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
      {
        url: 'https://devconte-server.eddi.cloud/',
      },
      {
        url: 'https://michaeldutheil-server.eddi.cloud/',
      },
    ],
  },
  apis: ['./app/routers/doc/*.js'],
};

const swaggerSpec = swaggerJSDoc(Options);

module.exports = { swaggerSpec };
