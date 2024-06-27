import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "home",
        title: "Home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "resume",
        title: "Resume",
        loadChildren: () =>
          import("./resume/resume.module").then((m) => m.ResumePageModule),
      },
      {
        path: "contact",
        title: "Contact",
        loadChildren: () =>
          import("./contact/contact.module").then((m) => m.ContactPageModule),
      },
      {
        path: "details",
        title: "Details",
        loadChildren: () =>
          import("./details/details.module").then((m) => m.DetailsPageModule),
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
