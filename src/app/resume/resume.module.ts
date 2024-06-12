import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';

import { ResumePage } from './resume.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedModule } from '../shared/shared.module';
import { ExamplePdfViewerComponent } from '../example-pdf-viewer/example-pdf-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumePageRoutingModule,
    NgxExtendedPdfViewerModule,
    SharedModule,
  ],
  declarations: [ResumePage, ExamplePdfViewerComponent],
})
export class ResumePageModule {}
