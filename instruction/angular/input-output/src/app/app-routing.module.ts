import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: '/main/1' },
    { path: 'main/:id', component: MainComponent },
    { path: 'second/:id', component: SecondComponent },
    { path: 'third/:id', component: ThirdComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }