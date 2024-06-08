/* eslint-disable @typescript-eslint/no-unused-vars */

/* v1 */
// import * as functions from "firebase-functions/";

/* v2 */
import {defineSecret} from "firebase-functions/params";
import {CallableRequest, onCall} from "firebase-functions/v2/https";

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";

/* v1 */
// interface Data {
//   email: string;
//   name: string;
//   message: string;
// }

// const apiKey: string = functions.config().sendgrid.key;
// const templateId: string = functions.config().sendgrid.template;
// sgMail.setApiKey(apiKey);

// export const genericEmail = functions
//   .runWith({
//     enforceAppCheck: true, // Enforce App Check token
//     consumeAppCheckToken: true, // Access App Check token information
//   })
//   .https.onCall(
//     async (data: Data) => {
//       try {
//         const msg = {
//           to: "email@douglaswhite.dev",
//           from: data.email,
//           templateId: templateId,
//           dynamic_template_data: {
//             subject: "Job Opportunity",
//             name: data.name,
//             email: data.email,
//             message: data.message,
//           },
//         };
//         await sgMail.send(msg);
//         return {
//           header: `Thank you ${data.name}!`,
//           message: "Your message has been sent.",
//         };
//       } catch (error) {
//         return {
//           header: "Error",
//           message: error,
//         };
//       }
//     }
//   );

/* v2 */
const apiKey = defineSecret("sendgrid.key");
const templateId = defineSecret("sendgrid.template");
sgMail.setApiKey(apiKey.value());

exports.genericEmail = onCall(
  {
    enforceAppCheck: true, // Enforce App Check token
    consumeAppCheckToken: true, // Access App Check token information
  },
  async (request: CallableRequest) => {
    try {
      const msg = {
        to: "email@douglaswhite.dev",
        from: request.data.email,
        templateId: templateId.value(),
        dynamic_template_data: {
          subject: "Job Opportunity",
          name: request.data.name,
          email: request.data.email,
          message: request.data.message,
        },
      };
      await sgMail.send(msg);
      return {
        header: `Thank you ${request.data.name}!`,
        message: "Your message has been sent.",
      };
    } catch (error) {
      return {
        header: "Error",
        message: error,
      };
    }
  }
);
