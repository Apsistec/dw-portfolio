import { Component, inject, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ThemeService } from "../services/theme/theme.service";
import { AppComponent } from "../app.component";

@Component({
    selector: "app-tabs",
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.scss"],
    standalone: false
})
export class TabsComponent implements OnInit {
  isDesktop!: boolean;
  tabBarLocation!: string;
  platform = inject(Platform);
  themeService = inject(ThemeService);


  ngOnInit(): void {
    if (this.platform.is("desktop")) {
      this.isDesktop = true;
      this.tabBarLocation = "top";
    } else {
      this.isDesktop = false;
      this.tabBarLocation = "bottom";
    }
  }

  toggleChange(ev: { detail: { checked: any } }) {
    this.themeService.toggleChange(ev.detail.checked);
  }
  constructor(private appComponent: AppComponent) {}

  get canInstall(): boolean {
    return this.appComponent.canInstall();
  }

  installApp() {
    this.appComponent.initiateInstall();
  }
}
