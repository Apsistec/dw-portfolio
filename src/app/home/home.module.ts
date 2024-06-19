import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { SharedModule } from "../shared/shared.module";
import { HomePageRoutingModule } from "./home-routing.module";
import { NgxEchartsModule } from "ngx-echarts";
import { SkillsComponent } from "../components/skills/skills.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { GaugesComponent } from "../components/gauges/gauges.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    NgxEchartsModule,
    NgApexchartsModule
  ],
  declarations: [HomePage, SkillsComponent, GaugesComponent],
})
export class HomePageModule { }
