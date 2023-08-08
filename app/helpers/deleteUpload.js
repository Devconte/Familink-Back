const { unlink } = require('fs');
const path = require('path');
const logger = require('./logger');

const deleteImage = (pictureUrl) => {
  try {
    const imagePath = path.join('app', 'images', '/');
    unlink(imagePath + pictureUrl, (error) => {
      if (error) { throw new Error(`Error deleting the image, ${error.message}`); }
      logger.info(`Delete File successfully : ${pictureUrl}`);
    });
  } catch (error) {
    logger.error(error);
  }
};
module.exports = deleteImage;
