import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { SharedModule } from "../shared/shared.module";
import { HomePageRoutingModule } from "./home-routing.module";
import { HeroDevicesComponent } from "../components/hero-devices/hero-devices.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { GaugesComponent } from "../components/gauges/gauges.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    NgApexchartsModule,
  ],
  declarations: [
    HomePage,
    HeroDevicesComponent,
    SkillsComponent,
    GaugesComponent,
  ],
})
export class HomePageModule {}
