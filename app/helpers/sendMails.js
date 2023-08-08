const nodemailer = require('nodemailer');
const logger = require('./logger');

const {
  BREVO_PORT, SERVER_SMTP, LOGIN_BREVO, PASSWORD_BREVO,
} = process.env;

const sendEmails = async (dataEmail) => {
  const transporter = nodemailer.createTransport({
    host: SERVER_SMTP,
    port: BREVO_PORT,
    auth: {
      user: LOGIN_BREVO,
      pass: PASSWORD_BREVO,
    },

  });
  const mail = {
    from: 'familink@familink.com',
    to: dataEmail.email,
    subject: dataEmail.subject,
    text: dataEmail.text,
  };

  await transporter.sendMail(mail, (error, info) => {
    if (error) {
      logger.info(error);
    } else {
      logger.info(`Email sent: ${info.response}; ${dataEmail.email}`);
    }
  });
};

module.exports = sendEmails;
