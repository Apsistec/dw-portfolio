import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TabsComponent } from "./tabs/tabs.component";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireFunctionsModule } from "@angular/fire/compat/functions";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxEchartsModule } from "ngx-echarts";
// import * as echarts from "echarts";
@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
    NgxExtendedPdfViewerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    BrowserAnimationsModule,
	NgxEchartsModule.forRoot({
		echarts: () => import('echarts'),
	  }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
