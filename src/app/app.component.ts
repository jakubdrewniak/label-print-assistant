import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'label-print-assistant';

  ngOnInit() {
    window.addEventListener(
      'dragover',
      (e) => {
        if (e && (e.target as any).tagName !== 'INPUT') {
          e.preventDefault();
        }
      },
      false
    );
    window.addEventListener(
      'drop',
      (e) => {
        if (e && (e.target as any).tagName !== 'INPUT') {
          e.preventDefault();
        }
      },
      false
    );
  }
}
