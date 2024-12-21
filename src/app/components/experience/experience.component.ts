import { Component, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
import { Job } from "src/app/models/job.model";
import { jobsData } from "./jobs-data";
import { DetailsPage } from "src/app/details/details.page";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
    standalone: false
})
export class ExperienceComponent implements OnInit {
  jobs: Job[] = [];
  name!: string;
  message =
    "This modal example uses triggers to automatically open a modal when the button is clicked.";

  constructor(
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
      id: job.id.toString(),
      cssClass: "experience-modal",
    });
    modal.onDidDismiss().then((job) => {
      if(job){
        this.openModal(this.jobs[job.data])
      }
    });
    modal.present();
  }
}
