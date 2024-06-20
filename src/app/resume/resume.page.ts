import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme/theme.service";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.page.html",
  styleUrls: ["./resume.page.scss"],
})
export class ResumePage implements OnInit {
  isDark!: boolean | undefined;
  theme!: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.data$.subscribe((data) => {
      if (data?.isDark) this.theme = "dark";
      else this.theme = "light";
    });
  }
}
