import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertController, ToastController } from "@ionic/angular";
import { AngularFireFunctions } from "@angular/fire/compat/functions";

interface MessageResult {
  header: string;
  message: string;
}

@Component({
    selector: "app-contact",
    templateUrl: "contact.page.html",
    styleUrls: ["contact.page.scss"],
    standalone: false
})
export class ContactPage {
  emailForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z]+"
      ),
      Validators.email,
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(7),
    ]),
  });

  isLoading = false;
  res!: MessageResult;

  constructor(
    private toast: ToastController,
    private alert: AlertController,
    private fun: AngularFireFunctions
  ) {}

  async onSubmit() {
    if (this.emailForm.status === "INVALID") {
      console.log(this.emailForm.status);
      const alert = await this.alert.create({
        // subHeader: "Form Incomplete",
        message: "Please complete the form before you submit.",
        header: "Form Error",
        translucent: true,
        cssClass: "alertCss",
        buttons: [
          {
            text: "Okay",
            role: "cancel",
            htmlAttributes: {
              "aria-label": "okay",
            },
          },
        ],
      });
      await alert.present();
    } else if (this.emailForm.status === "VALID") {
      const controls = this.emailForm.value;
      try {
        const submitEmailForm = this.fun.httpsCallable("sendMail");
        await submitEmailForm({
          name: controls.name,
          email: controls.email,
          message: controls.message,
        }).subscribe(async (res: MessageResult) => {
          const toaster = await this.toast.create({
            header: res.header,
            message: res.message,
            cssClass: "successT",
            position: "middle",
            keyboardClose: true,
          });
          await toaster.present;
          await this.emailForm.reset();
        });
      } catch (error: any) {
        console.log(error);
        await this.emailForm.reset();
        const alert = await this.alert.create({
          header: error.header,
          message: error.message,
        });
        await alert.present();
      }
    }
  }
}
