import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
const routes : Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/one/1'},
    {path: 'one/:id', component: OneComponent},
    {path: 'two/:id', component: TwoComponent},
    {path: 'three/:id', component: ThreeComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }