import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printing-board',
  templateUrl: './printing-board.component.html',
  styleUrls: ['./printing-board.component.scss']
})
export class PrintingBoardComponent implements OnInit {

  private file: File;

  constructor() { }

  ngOnInit(): void {
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  logFile() {
    console.log(this.file);
  }
}
