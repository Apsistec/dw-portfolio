import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "landing",
        loadChildren: () =>
          import("../landing/landing.module").then((m) => m.LandingPageModule),
      },
      {
        path: "resume",
        loadChildren: () =>
          import("../resume/resume.module").then((m) => m.ResumePageModule),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../contact/contact.module").then((m) => m.ContactPageModule),
      },
      {
        path: "",
        redirectTo: "tabs/landing",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/landing",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
