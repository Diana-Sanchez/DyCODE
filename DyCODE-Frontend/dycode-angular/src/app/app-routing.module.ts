import { TodosComponent } from './proyectos/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAccesoComponent } from './app-acceso/app-acceso.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { LoginComponent } from './acceso/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AppProyectosComponent } from './app-proyectos/app-proyectos.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'acceso', component: AppAccesoComponent, children: [{ path:'login', component: LoginComponent }, { path: 'registro', component: RegistroComponent }] },
  { path: 'dycode', component: AppProyectosComponent, children: [{path:'', component: TodosComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
