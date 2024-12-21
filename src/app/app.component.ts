import { Component, OnInit, signal, VERSION } from "@angular/core";
import { PwaService } from "./services/pwa/pwa.service";
import { Platform, ToastController } from "@ionic/angular";
import { ThemeService } from "./services/theme/theme.service";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
    standalone: false
})
export class AppComponent implements OnInit {
  angular = "Angular " + VERSION.major;
  ion: string = "Ionic " + 8;
  paletteToggle: boolean | undefined;
  isDark: boolean | undefined;
  showBackButton: boolean = false;
  playToast = signal(true);
  notDesktop!: boolean;
  isAppInstalled: boolean = false;
  deferredPrompt: any;
  serviceWorkerStatus: string = 'Unknown';

  constructor(
    public pwa: PwaService,
    public toastController: ToastController,
    private themeService: ThemeService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.initializeApp();
    if ('serviceWorker' in navigator) { 
    this.pwa.updateSW();
    }
    this.themeService.theme$.subscribe((data) => {
      this.paletteToggle = data?.isDark;
    });

    this.displayOpeningNotification();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("desktop")) {
        this.notDesktop = false;
        this.handleAddToHomeScreen();
        this.checkIfInstalled();
      } else {
        this.notDesktop = true;
      }
    });
  }

  displayOpeningNotification() {
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
        duration: 3000,
        buttons: [
          {
            side: "end",
            icon: "close",
            role: "cancel",
          },
        ],
      });
      await toast.present().then(() => {
        this.playToast.set(false);
      });
    }
  }

  toggleChange(ev: { detail: { checked: any } }) {
    this.themeService.toggleChange(ev.detail.checked);
  }

  handleAddToHomeScreen() {
    window.addEventListener("beforeinstallprompt", (e: any) => {
      // e.preventDefault();
      this.deferredPrompt = e;
      console.log(this.deferredPrompt)
    });

    window.addEventListener("appinstalled", (evt) => {
      this.isAppInstalled = true;
      this.showToast("App was successfully installed!");
      this.deferredPrompt = null;
      this.onAppInstalled();
    });
  }

  checkIfInstalled() {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      this.isAppInstalled = true;
    }
  }

  async initiateInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
        this.showToast("Installation started. Please wait...");
      } else {
        console.log("User dismissed the install prompt");
        this.showToast("Installation cancelled. You can try again later.");
      }
      this.deferredPrompt = null;
    } else if (this.isAppInstalled) {
      this.showToast("App is already installed on your device.");
    } else {
      this.showToast("App can't be installed on your device at this time.");
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  private onAppInstalled() {
    console.log("App installed! Performing post-installation actions...");
    // Implement any specific actions you want to occur after installation
    // For example: enable offline mode, sync data, etc.
  }

  canInstall(): boolean {
    return !!this.deferredPrompt && !this.isAppInstalled;
  }
}
