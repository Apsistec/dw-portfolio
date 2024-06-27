import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController, NavController } from "@ionic/angular";
import { Job } from "src/app/models/job.model";
import { jobsData } from "./jobs-data";
import { OverlayEventDetail } from "@ionic/core";
import { DetailsPage } from "src/app/details/details.page";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  jobs: Job[] = [];
  name!: string;
  message =
    "This modal example uses triggers to automatically open a modal when the button is clicked.";

  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.jobs = jobsData;
  }

  @ViewChild(IonModal) modal!: IonModal;

  async openModal(job: Job) {
    const modal = await this.modalCtrl.create({
      component: DetailsPage,
      componentProps: {
        selectedJob: job,
      },
      cssClass: "experience-modal",
    });
    modal.present();
  }
}
