import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintingBoardComponent } from './printing-board/printing-board.component';


const routes: Routes = [
  { path: '**', component: PrintingBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
