import { Component, OnInit } from '@angular/core';
import { FileSlot, FileStatus } from '../models/file-slot';

@Component({
  selector: 'app-printing-board',
  templateUrl: './printing-board.component.html',
  styleUrls: ['./printing-board.component.scss'],
})
export class PrintingBoardComponent implements OnInit {
  availableSlots: FileSlot[];

  constructor() {}

  ngOnInit(): void {
    this.availableSlots = [
      { id: 'id1', status: FileStatus.empty },
      { id: 'id2', status: FileStatus.empty },
      { id: 'id3', status: FileStatus.empty },
      { id: 'id4', status: FileStatus.empty },
    ];
  }

  printBoard(): void {
    window.print();
  }

  fileIsLoading(): boolean {
    return !!this.availableSlots.find(s => s.status === FileStatus.loading);
  }
}
