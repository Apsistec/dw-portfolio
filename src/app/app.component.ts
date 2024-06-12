import {
  AfterViewInit,
  ApplicationRef,
  Component,
  OnInit,
  signal,
  VERSION,
} from "@angular/core";
import { PwaService } from "./services/pwa.service";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { DataService } from "./services/data.service";
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
  currentRoute: string | unknown;
  playToast = signal(true);

  constructor(
    public pwa: PwaService,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private dataService: DataService
  ) {}

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.currentRoute =
      this.activatedRoute.snapshot?.routeConfig?.title ?? null;
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );

    this.dataService.data$.subscribe((data) => {
      this.paletteToggle = data?.isDark;
    });

    this.presentToast();
  }

  async presentToast() {
    if (this.playToast() == true) {
      return;
    } else {
      const toast = await this.toastController.create({
        header: `My portfolio as a cross platform PWA built with ${this.ion} & ${this.angular}`,
        message: `Thank you for stopping by. Be sure to see my resume and send me a message to let me know you were here.`,
        icon: "../../assets/computer-code.svg",
        position: "middle",
        color: "success",
        buttons: [
          {
            text: "Dismiss",
            role: "cancel",
          },
        ],
      });
      await toast.present().then(() => {
        this.playToast.set(false);
      });
    }
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    const newData: any = { isDark };
    this.dataService.setData(newData);
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: { detail: { checked: any } }) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean | undefined) {
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  }
}
