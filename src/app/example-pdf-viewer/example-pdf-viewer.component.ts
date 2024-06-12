import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import {
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
} from "ngx-extended-pdf-viewer";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-example-pdf-viewer",
  templateUrl: "./example-pdf-viewer.component.html",
  styleUrls: ["./example-pdf-viewer.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePdfViewerComponent implements OnInit {
  isDark!: boolean | undefined;
  theme: string = "light" ?? "dark";

  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
   */
  constructor(
    private pdfService: NgxExtendedPdfViewerService,
    private dataService: DataService
  ) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    // pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    // pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.
  }

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      if (data?.isDark) this.theme = "dark";
      else this.theme = "light";
    });
  }
}
