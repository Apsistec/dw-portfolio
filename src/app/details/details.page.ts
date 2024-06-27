import { Component, inject, Input } from '@angular/core';
import { Job } from '../models/job.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  @Input()selectedJob!: Job;

  modalCtrl = inject(ModalController);

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}