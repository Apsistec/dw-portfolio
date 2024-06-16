import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePage } from "./home.page";
import { SharedModule } from "../shared/shared.module";
import { HomePageRoutingModule } from "./home-routing.module";
import { NgxEchartsModule } from "ngx-echarts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    NgxEchartsModule
  ],
  declarations: [HomePage],
})
export class HomePageModule { }
