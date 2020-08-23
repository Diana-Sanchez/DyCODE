import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  usuarios:any =[];

  constructor(private usuariosService:UsuariosService, private proyectoServices:ProyectosService) { }

  proyectos:any = [];
  usuario:any = '';

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.usuariosService.obtenerUsuarios().subscribe(
      res=>{
        this.usuarios = res;
        console.log('Usuarios: ', this.usuarios);
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  

}
