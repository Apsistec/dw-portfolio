import { Component, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme/theme.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.page.html",
  styleUrls: ["./resume.page.scss"],
})
export class ResumePage implements OnInit, OnDestroy {
  isDark!: boolean | undefined;
  theme!: string;
  themeSub$!: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSub$ = this.themeService.theme$.subscribe((theme) => {
      if (theme?.isDark) this.theme = "dark";
      else this.theme = "light";
    });
  }

  ngOnDestroy(): void {
    this.themeSub$.unsubscribe();
  }
}
