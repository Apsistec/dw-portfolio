import { Component, OnInit, VERSION, ViewChild } from "@angular/core";
import { IonApp, IonContent, ToastController } from "@ionic/angular";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage implements OnInit {
  name = "Angular" + VERSION.major;
  ion: string = "Ionic" + IonApp;
  showBackToTopFab = false;

  @ViewChild(IonContent, { static: false })
  content!: IonContent;

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    setTimeout(() => {
      this.presentToast();
    }, 3000);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message:
        "Thank you for your consideration.. This progressive web app (PWA) was built with Ionic 6 and ${name}",
      duration: 4500,
      header: "Portfolio of Douglas White",
      icon: "information-circle",
      position: "top",
      color: "primary",
    });
    await toast.present();
  }

  onScroll(ev: Event) {
    this.showBackToTopFab =
      (<CustomEvent>ev).detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id: any) {
    const element: any = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
