import { defineSecret } from "firebase-functions/params";
import { onCall } from "firebase-functions/v2/https";

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";
import * as admin from "firebase-admin";

admin.initializeApp();
const apiKey = defineSecret("KEY");
const templateId = defineSecret("ID");

exports.sendMail = onCall(
  { secrets: [apiKey, templateId] },
  async (request) => {
    try {
      sgMail.setApiKey(apiKey.value());
      const msg = {
        to: "email@douglaswhite.dev",
        from: request.data.email,
        templateId: templateId.value(),
        dynamic_template_data: {
          subject: "Portfolio Contact",
          name: request.data.name,
          email: request.data.email,
          message: request.data.message,
          preheader: "A new message from douglaswhite.app",
        },
      };
      await sgMail.send(msg);
      return {
        header: `Thank you ${request.data.name}!`,
        message: "Your message has been sent.",
      };
    } catch (error) {
      console.error(error);
      return {
        header: "Error",
        message: error,
      };
    }
  }
);
