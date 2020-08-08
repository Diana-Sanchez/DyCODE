import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './acceso/inicio/inicio.component';
import { NavbarComponent } from './acceso/navbar/navbar.component';
import { FooterComponent } from './acceso/footer/footer.component';
import { LoginComponent } from './acceso/login/login.component';
import { RegistroComponent } from './acceso/registro/registro.component';
import { AppAccesoComponent } from './app-acceso/app-acceso.component';
import { LandingComponent } from './landing/landing.component';


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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
