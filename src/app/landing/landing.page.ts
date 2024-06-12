/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  showBackToTopFab = false;

  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  scrollEnd = false;

  onScrollEnd(ev: Event) {
    this.scrollEnd = true;
    this.showBackToTopFab =
      (ev as CustomEvent).detail.scrollTop > 200 ? true : false;
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
