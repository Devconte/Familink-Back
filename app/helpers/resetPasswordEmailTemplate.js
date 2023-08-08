const resetPasswordEmailTemplate = (user, token) => (
  {
    email: user.email,
    subject: 'Reinitialiser votre mot de passe',
    text: `
          <!DOCTYPE html>
        <html>
        <body style="font-size: 16px;">
        <h1>FamiLink</h1>
        <h2> Bonjour, ${user.first_name} </h2>
        <p>Veuillez cliquer pour réinitialiser votre mot de passe en  cliquant sur le lien ci-dessous</p>
        <a href=https://michaeldutheil-server.eddi.cloud/reset-password?token=${token}>
        <button style="background-color: #4CAF50; color: white; padding: 4px 20px; text-align: center; text-decoration: none; display: inline-block; border: none;  font-size: 20px; border-radius: 12px; cursor: pointer;">
        Cliquez ici !
        </button>
        </a>
        </body>
        </html>`,
  });

module.exports = resetPasswordEmailTemplate;
