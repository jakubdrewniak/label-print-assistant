import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfFileReader } from './auxiliary/fileReader';

@Component({
  selector: 'app-printing-board',
  templateUrl: './printing-board.component.html',
  styleUrls: ['./printing-board.component.scss']
})
export class PrintingBoardComponent implements OnInit {

  loadedFile: any;
  @ViewChild('viewer') pdfAppComponent;

  constructor(
    private pdfFileReader: PdfFileReader
  ) { }

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
    // TO DO: QUERY ELEMENTS BY CLASS NAMES, NOT INDEX IN CHILD NODES ARRAY

    // TO DO: WRITE SCRIPT TO CHANGE C:\Users\kuba\code\label-print-assistant\node_modules\ng2-pdfjs-viewer\pdfjs\web\viewer.js  var PRINT_RESOLUTION = 12000;
    this.pdfAppComponent.PDFViewerApplication.appConfig.mainContainer.childNodes[1].childNodes[0]
      .style.margin = 0;
    this.pdfAppComponent.PDFViewerApplication.appConfig.mainContainer.childNodes[1].childNodes[0]
      .style.border = 'none';
  }

  logFile() {
    console.log(this.loadedFile);
  }

  removeFile() {
    this.loadedFile = null;
  }
}
