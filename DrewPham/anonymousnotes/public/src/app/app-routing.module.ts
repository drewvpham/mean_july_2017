import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteboardComponent } from './noteboard/noteboard.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: NoteboardComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
