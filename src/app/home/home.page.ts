import { Component, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";

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
  isShown: any;

  onScrollEnd(ev: Event) {
    this.scrollEnd = true;
    this.showBackToTopFab =
      (ev as CustomEvent).detail.scrollTop > 250 ? true : false;
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
