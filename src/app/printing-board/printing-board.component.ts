import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-printing-board',
  templateUrl: './printing-board.component.html',
  styleUrls: ['./printing-board.component.scss']
})
export class PrintingBoardComponent implements OnInit {

  availableSlots = ['id1', 'id2', 'id3', 'id4'];


  constructor() { }

  ngOnInit(): void {
  }

  printBoard() {
    window.print();
  }
}
