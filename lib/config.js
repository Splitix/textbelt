// const SENDMAIL_TRANSPORT = {
//   // This transport uses the local sendmail installation.
//   sendmail: true,
//   newline: 'unix',
//   path: '/usr/sbin/sendmail',
// };

let transporter = nodemailer.createTransport({
     service: 'Yahoo', // no need to set host or port etc.
     auth: {
         user: 'galindo_sms_mailer@yahoo.com',
         pass: 'ThisismyPassword123'
     }
});

transporter.sendMail(...)

// const SMTP_TRANSPORT = {
//   // This is a Nodemailer transport. It can either be an SMTP server or a
//   // well-known service such as Sengrid, Mailgun, Gmail, etc.
//   // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
//   host: 'smtp.example.com',
//   port: 587,
//   auth: {
//     user: 'user@example.com',
//     pass: 'example password 1',
//   },
//   secureConnection: 'false',
//   tls: {
//     ciphers: 'SSLv3',
//   },
// };

// module.exports = {
//   transport: SMTP_TRANSPORT,
//   mailOptions: {
//     from: '"Jane Doe" <jane.doe@example.com>',
//   },
//   debugEnabled: false,
// };
