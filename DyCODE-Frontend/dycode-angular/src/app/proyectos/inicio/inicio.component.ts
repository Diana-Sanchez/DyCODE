import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ngOnInit(): void {
  }
  regionPregunta:string = 'hola'
  regionVisible:string ='';

  

  proyectos:any = [];
  

  constructor(private _cargaScripts:CargarScriptsService, ) { 
    _cargaScripts.carga(["index/controlador"])
  }

  
  
}
