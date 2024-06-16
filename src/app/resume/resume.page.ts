import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.page.html",
  styleUrls: ["./resume.page.scss"],
})
export class ResumePage implements OnInit {
  isDark!: boolean | undefined;
  theme!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      if (data?.isDark) this.theme = "dark";
      else this.theme = "light";
    });
  }
}
