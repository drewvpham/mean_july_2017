import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'dashboard', component: BrowseComponent },
    { path: 'my_listings', component: ListingsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
