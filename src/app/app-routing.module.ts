import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './funcionalidades/home/containers/container-home.component';
import { ContainerLayoutComponent } from './layout/containers/container.layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerLayoutComponent,
    children: [
      {
        path: 'home',
        component: ContainerHomeComponent
      },
      { 
        path: 'funcionalidades', 
        loadChildren: () => 
          import('./funcionalidades/funcionalidades.module').then(
            m => m.FuncionalidadesModule
          )
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
