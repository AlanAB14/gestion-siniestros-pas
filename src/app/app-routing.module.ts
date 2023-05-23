import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SiniestroComponent } from './pages/siniestro/siniestro.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'siniestro/:id',
    component: SiniestroComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
