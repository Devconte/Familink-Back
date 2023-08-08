const url = process.env.NODE_ENV === 'development' ? 'href=http://localhost:3000/api/user/verify/' : 'href=https://michaeldutheil-server.eddi.cloud/api/user/verify/';

const confirmEmailTemplate = (user, token) => (
  {
    email: user.email,
    subject: 'Confirmation de votre mail',
    text: `
          <!DOCTYPE html>
        <html>
        <body style="font-size: 16px;">
        <h1>FamiLink</h1>
        <h2> Bonjour, ${user.first_name} </h2>
        <p>Merci pour votre inscription.</p>
        <p>Veuillez confirmer votre mail en cliquant sur le lien ci-dessous</p>
        <a ${url}${token}>
        <button style="background-color: #4CAF50; color: white; padding: 4px 20px; text-align: center; text-decoration: none; display: inline-block; border: none;  font-size: 20px; border-radius: 12px; cursor: pointer;">
        Cliquez ici !
        </button>
        </a>
        </body>
        </html>`,
  });

module.exports = confirmEmailTemplate;
