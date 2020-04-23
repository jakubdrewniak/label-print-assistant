import { Component, OnInit } from '@angular/core';
import { PdfFileReader } from './auxiliary/fileReader';

@Component({
  selector: 'app-printing-board',
  templateUrl: './printing-board.component.html',
  styleUrls: ['./printing-board.component.scss']
})
export class PrintingBoardComponent implements OnInit {

  loadedFile: any;

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

  logFile() {
    console.log(this.loadedFile);
  }

  removeFile() {
    this.loadedFile = null;
  }
}
