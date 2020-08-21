import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAccesoComponent } from './app-acceso/app-acceso.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { LoginComponent } from './acceso/login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AppProyectosComponent } from './app-proyectos/app-proyectos.component';
import { InicioComponent } from './proyectos/inicio/inicio.component';
import { PapeleraComponent } from './proyectos/papelera/papelera.component';
import { TodosComponent } from './proyectos/todos/todos.component';
import { EdicionComponent } from './usuarios/edicion/edicion.component';
import { SnippetsComponent } from './snippets/snippets/snippets.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path:'dycode', component: LandingComponent },
  { path: 'acceso', component: AppAccesoComponent, children: [
    { path:'login', component: LoginComponent }, 
    { path: 'registro', component: RegistroComponent }] },
  { path: 'proyectos', component: AppProyectosComponent, children: [
    { path:'', component: InicioComponent},
    { path:'todos', component: InicioComponent, children:[{path:'edicion', component: TodosComponent}]}, 
    { path:'papelera', component: PapeleraComponent}, 
    { path:'edicion', component: TodosComponent},
    { path:'usuarios-edicion', component: EdicionComponent },
  { path: 'snippets', component: SnippetsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
