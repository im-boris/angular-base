import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './containers/container-home.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: ContainerHomeComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
