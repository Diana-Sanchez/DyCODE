import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  regionVisible:string = '';

  verTabla(){

  };

  verInformacion(){
    this.regionVisible = 'informacion';
  }

  constructor(private _cargaScripts:CargarScriptsService) { 
    _cargaScripts.carga(["index/index"])
  }

  ngOnInit(): void {
  }

}
