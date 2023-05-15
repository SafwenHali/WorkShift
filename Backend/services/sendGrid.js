const config = require("../config/vars.js");

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(config.sendGridApiKey);

exports.sendEmail = async (payload) => {
  const msg = {
    to: payload.to, // Change to your recipient
    from: payload.from, // Change to your verified sender
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
