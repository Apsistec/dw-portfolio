import { Component, ViewChild } from "@angular/core";
import { IonContent, ScrollCustomEvent } from "@ionic/angular";

@Component({
    selector: "app-home",
    templateUrl: "./home.page.html",
    styleUrls: ["./home.page.scss"],
    standalone: false
})
export class HomePage {
  showBackToTopFab = false;
  @ViewChild(IonContent, { static: false })
  content!: IonContent;

  onScrollEnd(ev: Event) {
    this.showBackToTopFab =
      (ev as ScrollCustomEvent).detail.scrollTop > 450 ? true : false;
  }

  scrollToTop() {
    this.content.scrollToTop(750).then(() => {});
  }
}
