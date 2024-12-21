import { Component, OnInit } from "@angular/core";
import { SkillsData } from "./skills-data";
import { ThemeService } from "src/app/services/theme/theme.service";

@Component({
    selector: "app-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
    standalone: false
})
export class SkillsComponent implements OnInit {
  skillsData = SkillsData;

  constructor(private themeService: ThemeService) {}
  ngOnInit() {
  }
}
