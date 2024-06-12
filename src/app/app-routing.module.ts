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
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },

      {
        path: "resume",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./resume/resume.module").then((m) => m.ResumePageModule),
          },
        ],
      },
      {
        path: "contact",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./contact/contact.module").then(
                (m) => m.ContactPageModule
              ),
          },
        ],
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
