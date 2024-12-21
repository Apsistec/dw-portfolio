import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TabsComponent } from "./tabs/tabs.component";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { environment } from "src/environments/environment";
import { initializeApp } from 'firebase/app';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

const app = initializeApp(environment.firebaseConfig);

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    Firestore,
    Functions
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}