import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subscription } from "rxjs";

interface ThemeData {
  isDark: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeData | null>(null);
  theme$: Observable<ThemeData | null>;

  constructor() {
    this.theme$ = this.themeSubject.asObservable();

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

  setTheme(newTheme: ThemeData) {
    this.themeSubject.next(newTheme);
  }

  getThemeIsDark() {
    return this.theme$.pipe(
      map((theme) => {
        if (theme?.isDark) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    const newTheme: any = { isDark };
    this.setTheme(newTheme);
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(checked: boolean) {
    this.toggleDarkPalette(checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean | undefined) {
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  }
}
