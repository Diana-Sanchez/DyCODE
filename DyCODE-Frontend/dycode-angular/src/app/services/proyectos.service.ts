import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private httpClient:HttpClient) { }

  obtenerProyectos(idUsuario):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/usuarios/${idUsuario}/proyectos`, {});
  }

}
