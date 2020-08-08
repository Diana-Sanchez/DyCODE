import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAccesoComponent } from './app-acceso/app-acceso.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { LoginComponent } from './acceso/login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'acceso', component: AppAccesoComponent, children: [{ path:'login', component: LoginComponent }, { path: 'registro', component: RegistroComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
