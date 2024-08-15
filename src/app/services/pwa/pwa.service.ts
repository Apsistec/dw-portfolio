import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { AlertController, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class PwaService {
  isUpdateAvailable: boolean = false;

  constructor(
    private updates: SwUpdate,
    public toast: ToastController,
    private alert: AlertController
  ) {}

  updateSW() {
    // Check for updates immediately
    this.updates.checkForUpdate();

    // Listen for new versions
    this.updates.versionUpdates.subscribe((event) => {
      switch (event.type) {
        case "VERSION_DETECTED":
          this.isUpdateAvailable = true;
          break;
        case "VERSION_READY":
          // Prompt the user to update
          if (
            confirm("A new version is available. Would you like to update?")
          ) {
            window.location.reload();
          }
          break;
        case "VERSION_INSTALLATION_FAILED":
          console.error("Error during update:", event.error);
          const alerter = this.alert
            .create({
              header: "Update Error Occurred",
              subHeader: "Window needs to reload to update",
              message: "You will lose any data you entered, okay?",
              keyboardClose: true,
              translucent: true,
              animated: true,
              backdropDismiss: false,
              buttons: [
                {
                  role: "cancel",
                  text: "No",
                },
                {
                  text: "Okay",
                  handler: () => {
                    window.location.reload();
                  },
                },
              ],
            })
            .then((alerter) => alerter.present());
          break;
        case "NO_NEW_VERSION_DETECTED":
          console.error("No new version available.");
          break;
        default:
          console.warn("Unknown update event:", event);
      }
    });
    // if (this.swUpdate.isEnabled) {
    //   const updateAvailable = await this.swUpdate.checkForUpdate();
    //   if (updateAvailable) {
    //     const updated = await this.swUpdate.activateUpdate();
    //     if (updated) {
    //       const toaster = await this.toast.create({
    //         header: "Update Successful",
    //         message:
    //           "The update has been installed and the app is ready for use.",
    //         color: "medium",
    //         position: "middle",
    //         duration: 3000,
    //         icon: "information-circle-sharp",
    //         buttons: [
    //           {
    //             side: "end",
    //             text: "Close",
    //             role: "cancel",
    //           },
    //         ],
    //       });
    //       await toaster.present();
    //     }
    //   } else if (this.swUpdate.unrecoverable) {
    // const alerter = await this.alert.create({
    //   header: "Update Error Occurred",
    //   subHeader: "Window needs to reload to update",
    //   message: "You will lose any data you entered, okay?",
    //   keyboardClose: true,
    //   translucent: true,
    //   animated: true,
    //   backdropDismiss: false,
    //   buttons: [
    //     {
    //       role: "cancel",
    //       text: "No",
    //     },
    //     {
    //       text: "Okay",
    //       handler: () => {
    //         window.location.reload();
    //       },
    //     },
    //   ],
    // });
    // await alerter.present();
    //   }
    // }
  }
}
