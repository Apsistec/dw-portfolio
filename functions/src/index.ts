import { defineSecret } from "firebase-functions/params";
import { onCall } from "firebase-functions/v2/https";

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";
import * as admin from "firebase-admin";

admin.initializeApp();
const apiKey = defineSecret("KEY");
// const templateId = defineSecret("ID");

exports.sendMail = onCall((request) => {
  sgMail.setApiKey(apiKey.value());
  const msg = {
    to: "email@douglaswhite.dev",
    from: request.data.email,
    subject: "Portfolio Contact",
    name: request.data.name,
    text: request.data.message,  
    html: '<strong>' + request.data.message + '</strong>'
  }

  sgMail.send(msg)
    .then((response) => {
      return {
        header: `Thank you ${request.data.name}!`,
        message: "Your message has been sent.",
      };
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
});

