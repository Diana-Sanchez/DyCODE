import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Servicios
import { CargarScriptsService } from "./cargar-scripts.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './acceso/inicio/inicio.component';
import { NavbarComponent } from './acceso/navbar/navbar.component';
import { FooterComponent } from './acceso/footer/footer.component';
import { LoginComponent } from './acceso/login/login.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { AppAccesoComponent } from './app-acceso/app-acceso.component';
import { LandingComponent } from './landing/landing.component';
import { AppProyectosComponent } from './app-proyectos/app-proyectos.component';
import { HeaderComponent } from './proyectos/header/header.component';
import { SidebarComponent } from './proyectos/sidebar/sidebar.component';
import { TodosComponent } from './proyectos/todos/todos.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { PapeleraComponent } from './proyectos/papelera/papelera.component';
import { EdicionComponent } from './usuarios/edicion/edicion.component';
import { VerComponent } from './usuarios/ver/ver.component';
import { SnippetsComponent } from './snippets/snippets/snippets.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    AppAccesoComponent,
    LandingComponent,
    AppProyectosComponent,
    HeaderComponent,
    SidebarComponent,
    TodosComponent,
    PapeleraComponent,
    EdicionComponent,
    VerComponent,
    SnippetsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
