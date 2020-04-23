import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintingBoardComponent } from './printing-board/printing-board.component';
import { PdfFileReader } from './printing-board/auxiliary/fileReader';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

@NgModule({
  declarations: [
    AppComponent,
    PrintingBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfJsViewerModule
  ],
  providers: [
    PdfFileReader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
