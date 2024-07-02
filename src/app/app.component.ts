import { Component, OnInit, signal, VERSION } from "@angular/core";
import { PwaService } from "./services/pwa/pwa.service";
import { ToastController } from "@ionic/angular";
import { ThemeService } from "./services/theme/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  angular = "Angular " + VERSION.major;
  ion: string = "Ionic " + 8;
  paletteToggle: boolean | undefined;
  isDark: boolean | undefined;
  showBackButton: boolean = false;
  playToast = signal(true);
  currentPath!: string;
  constructor(
    public pwa: PwaService,
    public toastController: ToastController,
    private themeService: ThemeService
  ) {}

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.themeService.theme$.subscribe((data) => {
      this.paletteToggle = data?.isDark;
    });

    setTimeout(() => {
      this.presentToast();
    }, 2000);
  }

  async presentToast() {
    if (this.playToast()) {
      const toast = await this.toastController.create({
        position: "middle",
        header: `Thanks for stopping by...`,
        message: `This cross platform PWA uses ${this.ion} & ${this.angular}.`,
        cssClass: "intro-toast",
        icon: "logo-ionic",
        color: "medium",
        duration: 2500,
        buttons: [
          {
            icon: "close",
            role: "cancel",
          },
        ],
      });
      await toast.present().then(() => {
        this.playToast.set(false);
      });
    } else {
      return;
    }
  }

  toggleChange(ev: { detail: { checked: any } }) {
    this.themeService.toggleChange(ev.detail.checked);
  }
}
