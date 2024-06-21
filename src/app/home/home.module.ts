import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { SharedModule } from "../shared/shared.module";
import { HomePageRoutingModule } from "./home-routing.module";
import { HeroDevicesComponent } from "../components/hero-devices/hero-devices.component";
import { TreeComponent } from "../components/tree/tree.component";
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    NgxEchartsModule,
  ],
  declarations: [
    HomePage,
    HeroDevicesComponent,
    TreeComponent,
  ],
})
export class HomePageModule {}
