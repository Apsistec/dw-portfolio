import {
  AfterViewInit,
  ApplicationRef,
  Component,
  OnInit,
} from "@angular/core";
import { PwaService } from "./services/pwa.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  paletteToggle = false;
  currentRoute: string | unknown;

  constructor(public pwa: PwaService, private activatedRoute: ActivatedRoute) {}

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.currentRoute = this.activatedRoute.snapshot?.routeConfig?.title ?? null; 
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
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
