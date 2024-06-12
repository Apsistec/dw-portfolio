import { NgModule, importProvidersFrom, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { NgxEchartsModule } from "ngx-echarts";
import { TabsComponent } from "./tabs/tabs.component";

import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { environment } from "src/environments/environment";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
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
    // NgxEchartsModule.forRoot({
    //   echarts: () => import("echarts"),
    // }),
    NgxExtendedPdfViewerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      // importProvidersFrom(
      // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      // provideAnalytics(() => getAnalytics()),
      // ScreenTrackingService,
      // provideAppCheck(() => {
      //   // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      //   const provider = new ReCaptchaEnterpriseProvider( "6Ld_mPMpAAAAAHOoJszDVJgigi2hNtX8rYLXcG4N");
      //   return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
      //   }),
      //   provideFunctions(() => getFunctions()),
      // providePerformance(() => getPerformance()),
      // ),
        ],
        bootstrap: [AppComponent],
})
export class AppModule {}
