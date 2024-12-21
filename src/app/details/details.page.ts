import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Job } from "../models/job.model";
import { ModalController } from "@ionic/angular";
import { jobsData } from "../components/experience/jobs-data";

@Component({
    selector: "app-details",
    templateUrl: "./details.page.html",
    styleUrls: ["./details.page.scss"],
    standalone: false
})
export class DetailsPage {
  @Input() selectedJob!: Job;
  @Output() selectedJobChange = new EventEmitter<Job>();
  jobs: Job[] = jobsData;
  modalCtrl = inject(ModalController);

  close() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  previous(job: Job) {
    this.modalCtrl.dismiss(job.id - 2);
  }
  
  next(job: Job) {
    this.modalCtrl.dismiss(job.id);
  }
}
