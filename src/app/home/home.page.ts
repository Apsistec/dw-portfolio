import { Component, OnInit, VERSION, ViewChild } from "@angular/core";
import { IonApp, IonContent, ToastController } from "@ionic/angular";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  showBackToTopFab = false;

  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  scrollEnd = false;

  constructor() {}

  onScrollEnd(ev: Event) {
    this.scrollEnd = true;
    this.showBackToTopFab =
      (<CustomEvent>ev).detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id: any) {
    const element: any = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750).then(() => {
      this.scrollEnd = false;
    });
  }
}
