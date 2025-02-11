import { Component, inject, OnInit, Signal } from "@angular/core";
import { VERSION as NG_VERSION } from "@angular/core";
import { signal as ngSignal } from "@angular/core";
import { PwaService } from "./services/pwa/pwa.service";
import { Platform, ToastController } from "@ionic/angular";
import { ThemeService } from "./services/theme/theme.service";
import { addIcons } from "ionicons";
import {
  sunny,
  moon,
  mail,
  home,
  document,
  logoLinkedin,
  logoStackoverflow,
  logoGithub,
  call,
  pencil,
  chevronUp,
  chevronBack,
  chevronForward,
  person,
} from "ionicons/icons";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  standalone: false,
})
export class AppComponent implements OnInit {
  ion: string = "Ionic " + IONIC_VERSION;
  angular = "Angular " + NG_VERSION.major;
  paletteToggle: boolean = false;
  isDark: boolean = false;
  showBackButton: boolean = false;
  playToast = ngSignal(true);
  notDesktop: boolean = false;
  isAppInstalled: boolean = false;
  deferredPrompt: any = null;
  serviceWorkerStatus: string = "Unknown";

  constructor(
    public pwa: PwaService,
    private themeService: ThemeService,
    private platform: Platform
  ) {
    addIcons({
      sunny,
      moon,
      mail,
      home,
      document,
      logoLinkedin,
      logoStackoverflow,
      logoGithub,
      call,
      pencil,
      chevronUp,
      chevronBack,
      chevronForward,
      person,
    });
  }

  private toastController = inject(ToastController);

  ngOnInit(): void {
    this.initializeApp();
    if ("serviceWorker" in navigator) {
      this.pwa.updateSW();
    }
    this.themeService.theme$.subscribe((data) => {
      this.paletteToggle = data?.isDark || false;
    });

    this.displayOpeningNotification();
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      if (this.platform.is("desktop")) {
        this.notDesktop = false;
        // this.handleAddToHomeScreen();
        this.checkIfInstalled();
      } else {
        this.notDesktop = true;
      }
    });
  }

  displayOpeningNotification(): void {
    setTimeout(() => {
      this.presentToast();
    }, 2000);
  }

  async presentToast(): Promise<void> {
    if (this.playToast()) {
      try {
        // const toast = await this.toastController.create({
        //   position: "middle",
        //   header: `Thanks for stopping by...`,
        //   message: `This cross platform PWA uses ${this.ion} & ${this.angular}.`,
        //   cssClass: "intro-toast",
        //   icon: "logo-ionic",
        //   color: "medium",
        //   duration: 3000,
        //   buttons: [
        //     {
        //       side: "end",
        //       icon: "close",
        //       role: "cancel",
        //     },
        //   ],
        // });
        // await toast.present();
        this.playToast.set(false);
      } catch (error) {
        console.error("Toast error:", error);
      }
    }
  }

  toggleChange(ev: { detail: { checked: boolean } }): void {
    this.themeService.toggleChange(ev.detail.checked);
  }

  // handleAddToHomeScreen(): void {
  //   window.addEventListener("beforeinstallprompt", (e: any) => {
  //     this.deferredPrompt = e;
  //     console.log(this.deferredPrompt);
  //   });

  //   window.addEventListener("appinstalled", () => {
  //     this.isAppInstalled = true;
  //     this.showToast("App was successfully installed!");
  //     this.deferredPrompt = null;
  //     this.onAppInstalled();
  //   });
  // }

  checkIfInstalled(): void {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      this.isAppInstalled = true;
    }
  }

  async initiateInstall(): Promise<void> {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
        await this.showToast("Installation started. Please wait...");
      } else {
        console.log("User dismissed the install prompt");
        await this.showToast(
          "Installation cancelled. You can try again later."
        );
      }
      this.deferredPrompt = null;
    } else if (this.isAppInstalled) {
      await this.showToast("App is already installed on your device.");
    } else {
      await this.showToast(
        "App can't be installed on your device at this time."
      );
    }
  }

  private async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: "bottom",
    });
    await toast.present();
  }

  private onAppInstalled(): void {
    console.log("App installed! Performing post-installation actions...");
  }

  canInstall(): boolean {
    return !!this.deferredPrompt && !this.isAppInstalled;
  }
}
