import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'label-print-assistant';

  @HostListener('window:dragover', ['$event'])
  @HostListener('window:drop', ['$event'])
  onFileDragOrDrop(e) {
    if (e && (e.target as any).tagName !== 'INPUT') {
      e.preventDefault();
    }
  }
}
