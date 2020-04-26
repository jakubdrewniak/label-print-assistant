import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PdfFileReader } from '../printing-board/auxiliary/fileReader';

@Component({
  selector: 'app-pdf-slot',
  templateUrl: './pdf-slot.component.html',
  styleUrls: ['./pdf-slot.component.scss']
})
export class PdfSlotComponent implements OnInit {
  loadedFile: any;
  @ViewChild('viewer') pdfAppComponent;
  @Input() pdfId: number;

  constructor(private pdfFileReader: PdfFileReader) { }

  ngOnInit(): void {
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.pdfFileReader.pdfFileReader.readAsArrayBuffer(file);
    this.pdfFileReader.pdfFileReader.onloadend = (e) => {
      const result = this.pdfFileReader.pdfFileReader.result as ArrayBuffer;
      const uint = new Uint8Array(result);
      this.loadedFile = uint;
    };
  }

  pdfLoaded($event) {
    const pdfPage = this.pdfAppComponent.PDFViewerApplication.appConfig.mainContainer
      .querySelector('.pdfViewer').querySelector('.page');
    pdfPage.style.margin = 0;
    pdfPage.style.border = 'none';
  }
}
