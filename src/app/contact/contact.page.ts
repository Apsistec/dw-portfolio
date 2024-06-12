import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
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
})
export class ContactPage implements OnInit {
  
  emailForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
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
    private fb: FormBuilder,
    private fun: AngularFireFunctions
  ) {}

  ngOnInit() {
    return;
  }

  async onSubmit() {
    const name: string | null = this.emailForm.controls["name"].value;
    const email: string | null = this.emailForm.controls["email"].value;
    const message: string | null = this.emailForm.controls["message"].value;
    try {
      const submitEmailForm = this.fun.httpsCallable("genericEmail");
      await submitEmailForm({
        name: name,
        email: email,
        message: message,
      }).subscribe(async (res: MessageResult) => {
        this.emailForm.reset;
        this.res = res;
        const toaster = await this.toast.create({
          header: this.res.header,
          message: this.res.message,
          cssClass: "successT",
          position: "middle",
          keyboardClose: true,
        });
        await toaster.present();
      });
    } catch (error: any) {
      const alerter = await this.alert.create({
        header: error.header,
        message: error.message,
      });
      await alerter.present();
    }
  }
}
