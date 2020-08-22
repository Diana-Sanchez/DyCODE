import { Component, ViewChild, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  constructor(private _cargaScripts:CargarScriptsService) { 
    _cargaScripts.carga(["index/index"])
  }

  ngOnInit(): void {
    
  }

}
