import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
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
        loadChildren: () =>
          import("../landing/landing.module").then((m) => m.LandingPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
